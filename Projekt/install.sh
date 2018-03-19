#!/usr/bin/env bash

echo "Setting up dev env for THW project!"
echo "-----------------------------------"

echo "Create network? (Y/n) "
read answer

if [[ "$answer" != "N" ]] && [[ "$answer" != "n" ]] ; then
    docker network create thw-gui
fi

echo "Build frontend? (Y/n) "
read answer

if [[ "$answer" != "N" ]] && [[ "$answer" != "n" ]] ; then

    echo "Making entrypoint executable..."
    chmod +x docker/frontend/run.sh 

    docker-compose build frontend
fi

echo "Autostart container at boot? (Y/n) "
read answer
if [[ "$answer" != "N" ]] && [[ "$answer" != "n" ]] ; then
    docker-compose up -d frontend 
else
  echo "You can start the container using for example:"
  echo "docker run -p 8080:80 thw-frontend-dev"
fi

echo "The frontend will be initialized when first run,"
echo "~250MB package data need to be downloaded."
echo "You can then reach it at:"
echo "   http://localhost:8080"
echo "Have fun!"
