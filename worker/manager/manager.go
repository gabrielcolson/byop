package manager

import (
	"context"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
	"io"
	"log"
	"os"
)

type jobInfo struct {
	imageUrl    string
	containerId string
}

type containerManager struct {
	dockerClient   *client.Client
	currentJobInfo *jobInfo
	status containerStatus
}

type containerStatus string

const (
	statusClean containerStatus = "CLEAN"
	statusStarted = "STARTED"
	statusStopped = "STOPPED"
)

func New() (*containerManager, error) {
	cli, err := client.NewEnvClient()
	if err != nil {
		return nil, err
	}

	return &containerManager{
		dockerClient: cli,
		status: statusClean,
	}, nil
}

func (m *containerManager) StartContainer(ctx context.Context, imageUrl string) error {
	if m.status != statusClean {
		return fmt.Errorf("cannot start a new container, %s is already running", m.currentJobInfo.containerId)
	}

	log.Println("Pulling the image", imageUrl)
	reader, err := m.dockerClient.ImagePull(ctx, imageUrl, types.ImagePullOptions{})
	if err != nil {
		return err
	}
	_, err = io.Copy(os.Stdout, reader)
	if err != nil {
		return err
	}

	appPortNumber := "5050"
	appPort := nat.Port(fmt.Sprintf("%s/tcp", appPortNumber))
	externalPortNumber := "80"

	containerConfig := &container.Config{
		Image: imageUrl,
		ExposedPorts: nat.PortSet{
			appPort: struct{}{},
		},
		Env: []string{fmt.Sprintf("PORT=%s", appPortNumber)},
	}

	hostConfig := &container.HostConfig{
		PortBindings: nat.PortMap{
			appPort: []nat.PortBinding{
				{
					HostIP:   "0.0.0.0",
					HostPort: externalPortNumber,
				},
			},
		},
	}

	log.Println("Creating the container")
	containerResponse, err := m.dockerClient.ContainerCreate(ctx, containerConfig, hostConfig, nil, "")
	if err != nil {
		return err
	}
	log.Println("Container created:", containerResponse.ID)

	// Start the container
	err = m.dockerClient.ContainerStart(ctx, containerResponse.ID, types.ContainerStartOptions{})
	if err != nil {
		return err
	}

	m.currentJobInfo = &jobInfo{
		containerId: containerResponse.ID,
		imageUrl:    imageUrl,
	}
	m.status = statusStarted
	return nil
}

func (m *containerManager) Wait(ctx context.Context) error {
	if m.status != statusStarted {
		return fmt.Errorf("no job to wait")
	}

	containerId := m.currentJobInfo.containerId

	log.Println("waiting for container", containerId, "to exit")
	code, err := m.dockerClient.ContainerWait(ctx, containerId)
	if err != nil {
		return err
	}
	log.Println("container", containerId, "exited with status code:", code)

	m.status = statusStopped

	return nil
}

func (m *containerManager) StopContainer(ctx context.Context) error {
	if m.currentJobInfo == nil {
		return fmt.Errorf("no job to stop")
	}
	err := m.dockerClient.ContainerStop(ctx, m.currentJobInfo.containerId, nil)
	if err != nil {
		return err
	}

	m.status = statusStopped

	return nil
}

func (m *containerManager) Clean(ctx context.Context) error {
	if m.status != statusStarted && m.status != statusStopped {
		return fmt.Errorf("no container to clean")
	}
	err := m.dockerClient.ContainerRemove(ctx, m.currentJobInfo.containerId, types.ContainerRemoveOptions{})
	if err != nil {
		return err
	}

	// Remove image
	//_, err = cli.ImageRemove(ctx, imageName, types.ImageRemoveOptions{})
	//if err != nil {
	//	panic(err)
	//}

	m.status = statusClean
	return nil
}
