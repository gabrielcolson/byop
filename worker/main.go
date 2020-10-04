package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"worker/manager"
)

func main() {
	m, err := manager.New()
	panicOnError(err, "failed to create container manager")
	ctx := context.Background()

	if len(os.Args) < 2 {
		fmt.Println("usage: worker <api-url>")
	}

	apiURL := os.Args[1]

	res, err := http.Post(apiURL+"/api/workers/register", "application/json", nil)
	panicOnError(err, "failed to register to the API")

	defer func() { panicOnError(res.Body.Close(), "failed to close body") }()
	bodyData, err := ioutil.ReadAll(res.Body)

	body := struct{ ImageURL string `json:"imageURL"` }{}
	err = json.Unmarshal(bodyData, &body)
	panicOnError(err, "failed to parse body")

	err = m.StartContainer(ctx, body.ImageURL)
	panicOnError(err, "failed to start container")

	err = m.Wait(ctx)
	panicOnError(err, "failed to wait for container")

	err = m.Clean(ctx)
	panicOnError(err, "failed to clean container")

	_, err = http.Post(apiURL+"/api/workers/unregister", "application/json", nil)
	panicOnError(err, "failed to register to the API")
}

func panicOnError(err error, message string) {
	if err != nil {
		panic(fmt.Sprintln(message, err))
	}
}

