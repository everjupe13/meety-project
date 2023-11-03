#!/bin/sh

IMAGE_NAME=meety_web
CONTAINER_NAME=meety_web_container

docker stop $CONTAINER_NAME
docker rmi -f $IMAGE_NAME
