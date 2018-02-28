#!/usr/bin/bash
cd $PWD/src/quitstore/
printf "Setup Quitstore\n"
printf "Requires git and docker to work\n"


if ! [[ -f "formdata.nq" ]] && ! [[ -f "formdata.nq.graph" ]]; then
    printf "\nRequired files could not been found. Initializing QuitStore from scratch\n\n"

    git init
    touch formdata.nq
    touch formdata.nq.graph
    printf "<http://instructions.org/>" > formdata.nq.graph
    git add -A
    git commit -m "initial commit"
    docker run --name quitstore -d --rm -p 8080:80 -v $PWD:/data aksw/quitstore

else
    printf "\nRequired Files have been found. Reinitializing QuitStore\n"
    docker stop quitstore
    sudo rm -rf formdata.nq formdata.nq.graph .git

    git init
    touch formdata.nq
    touch formdata.nq.graph
    printf "<http://instructions.org/>" > formdata.nq.graph
    git add -A
    git commit -m "initial commit"
    docker run --name quitstore -d --rm -p 8080:80 -v $PWD:/data aksw/quitstore
fi
printf "\nQuitStore can now be accessed at localhost:8080"