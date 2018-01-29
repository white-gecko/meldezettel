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
    docker-compose up -d frontend 
fi

echo "5 minutes until the frontend is intialized, ~250MB package data"
echo "$ du -sh src/frontend/node_modules"
echo "The frontend can be reached at http://localhost:8080"
echo "Have fun!"
