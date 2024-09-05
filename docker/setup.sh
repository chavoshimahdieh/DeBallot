#!/bin/bash

DOCKER_IMAGE=$(docker ps --filter name=DEBALLOT -q)

if [ "$1" = "start" ]; then
  # Run Docker container
  # to run the frontend on a different port add the "-e PORT=8080" parameter and change "-p 8080:8080" one.
  [ -z "$DOCKER_IMAGE" ] && docker run \
    --name DEBALLOT \
    -v `pwd`:/opt/DeBallot \
    -w /opt/DeBallot \
    -p 3000:3000 \
    -p 8545:8545 \
    -dt node:20 || docker restart DEBALLOT

  docker exec -ti DEBALLOT bash -c "yarn install"
  docker exec -dt DEBALLOT bash -c "yarn chain"
  sleep 5
  docker exec -ti DEBALLOT bash -c "yarn deploy"
  docker exec -dt DEBALLOT bash -c "yarn start"
else
  if [ "$1" = "deploy" ]; then
    [ -z "$DOCKER_IMAGE" ] && echo "Container does not exist. Run the script with 'start' before running it with the 'deploy' option." \
      || docker exec -ti DEBALLOT bash -c "yarn deploy"
  else
    echo "Invalid command. Choose 'start' or 'deploy'."
  fi
fi

