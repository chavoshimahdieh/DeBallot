#!/bin/bash

CONTAINER_NAME=DEBALLOT
DOCKER_IMAGE=$(docker ps --filter name=$CONTAINER_NAME -q)

start_container() {
    if [ -z "$DOCKER_IMAGE" ]; then
        echo "Starting new container..."
        docker run \
            --name $CONTAINER_NAME \
            -v "$(pwd)":/opt/DeBallot \
            -w /opt/DeBallot \
            -p 3000:3000 \
            -p 8545:8545 \
            -dt node:20

        # Install Yarn in the container
        docker exec $CONTAINER_NAME npm install -g yarn

        # Install dependencies
        docker exec $CONTAINER_NAME yarn install

        # Run other commands
        docker exec -dt $CONTAINER_NAME yarn chain
        sleep 5
        docker exec $CONTAINER_NAME yarn deploy
        docker exec -dt $CONTAINER_NAME yarn start
    else
        echo "Container already exists. Restarting..."
        docker restart $CONTAINER_NAME
    fi
}

deploy() {
    if [ -z "$DOCKER_IMAGE" ]; then
        echo "Container does not exist. Run the script with 'start' before running it with the 'deploy' option."
    else
        docker exec $CONTAINER_NAME yarn deploy
    fi
}

case "$1" in
    start)
        start_container
        ;;
    deploy)
        deploy
        ;;
    *)
        echo "Invalid command. Choose 'start' or 'deploy'."
        exit 1
        ;;
esac