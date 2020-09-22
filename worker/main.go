package main

import (
	"context"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"io"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		panic("usage: worker imageName cmd...")
	}
	imageName := os.Args[1]
	cmd := os.Args[2:]
	ctx := context.Background()

	// Create the client
	cli, err := client.NewEnvClient()
	if err != nil {
		panic(err)
	}

	// pull the image
	reader, err := cli.ImagePull(ctx, imageName, types.ImagePullOptions{})
	if err != nil {
		panic(err)
	}
	_, err = io.Copy(os.Stdout, reader)
	if err != nil {
		panic(err)
	}

	// Create the container
	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: imageName,
		Cmd:   cmd,
	}, nil, nil, "")
	if err != nil {
		panic(err)
	}

	// Start the container
	err = cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{})
	if err != nil {
		panic(err)
	}

	reader, err = cli.ContainerLogs(ctx, resp.ID, types.ContainerLogsOptions{
		ShowStdout: true,
	})
	if err != nil {
		panic(err)
	}
	_, err = io.Copy(os.Stdout, reader)
	if err != nil {
		panic(err)
	}

	// Wait for the execution to finish
	_, err = cli.ContainerWait(ctx, resp.ID)
	if err != nil {
		panic(err)
	}

	err = cli.ContainerRemove(ctx, resp.ID, types.ContainerRemoveOptions{})
	if err != nil {
		panic(err)
	}

	_, err = cli.ImageRemove(ctx, imageName, types.ImageRemoveOptions{})
	if err != nil {
		panic(err)
	}
}