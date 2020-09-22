package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	"os"
	"strings"
	"worker/manager"
)

func panicOnError(err error, message string) {
	if err != nil {
		panic(err)
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	m, err := manager.New()
	panicOnError(err, "failed to create container manager")
	ctx := context.Background()

	for {
		fmt.Print("> ")
		line, err := reader.ReadString('\n')
		if err != nil {
			_ = m.StopContainer(ctx)
			_ = m.Clean(ctx)
			break
		}
		tokens := strings.Split(strings.TrimSuffix(line, "\n"), " ")
		switch tokens[0] {
		case "start":
			if len(tokens) != 2 {
				fmt.Println("usage: start <image-url>")
			} else {
				err = m.StartContainer(ctx, tokens[1])
				if err != nil {
					log.Println(err)
				}
			}
		case "stop":
			err = m.StopContainer(ctx)
			if err != nil {
				log.Println(err)
				continue
			}
			err = m.Clean(ctx)
			if err != nil {
				log.Println(err)
			}
		case "quit":
			_ = m.StopContainer(ctx)
			_ = m.Clean(ctx)
			return
		default:
			fmt.Println("unknown command:", tokens[0])
		}
	}
}
