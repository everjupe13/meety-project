#!/bin/sh

IMAGE_NAME=meety_web
CONTAINER_NAME=meety_web_container

docker build -t $IMAGE_NAME .
docker run -d --rm -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
