#!/usr/bin/env bash
printf "Check if a container named 'quitstore' is already up and running . . . \n"
is_running="$(docker inspect -f {{.State.Running}} quitstore)"
if [ "$is_running" = true ]; then
    printf "Container already running. Exiting\n"
    exit
else
    printf "Setup Quitstore\n"
    printf "Requires git and docker to work\n"

    # create dir for quitstore if not already existent
    if [[ -d "$PWD/src/quitstore" ]]; then
        cd $PWD/src/quitstore/
    else
        mkdir $PWD/src/quitstore
        cd $PWD/src/quitstore/
    fi

    if ! [[ -f "formdata.nq" ]] && ! [[ -f "formdata.nq.graph" ]] && ! [[ -f unassigned.nq ]]; then
        printf "\nRequired files could not been found. Initializing QuitStore from scratch\n\n"

        git init
        touch formdata.nq
        touch formdata.nq.graph
        printf "<http://www.na17b.org/thw/>" > formdata.nq.graph
        git add -A
        git commit -m "init repository"
        docker run --name quitstore -d --rm -p 5000:80 -v $PWD:/data aksw/quitstore
        printf "\nQuitStore can now be accessed at localhost:5000\n"
    else
        printf "\nRequired Files have been found.\n"
        read -p  "Do you want to reinitialize QuitStore? (removes current files) [y/N] " answer
        if [ "$answer" == "y" ] || [ "$answer" == "Y" ]; then
            sudo rm -rf formdata.nq formdata.nq.graph unassigned.nq .git
            git init
            touch formdata.nq
            touch formdata.nq.graph
            printf "<http://www.na17b.org/thw/>" > formdata.nq.graph
            git add -A
            git commit -m "init repository"
            docker run --name quitstore -d --rm -p 5000:80 -v $PWD:/data aksw/quitstore
            printf "\nQuitStore can now be accessed at localhost:5000\n"
        else
            printf "\nRestarting Container, leaving everything as is.\n"
            docker run --name quitstore -d --rm -p 5000:80 -v $PWD:/data aksw/quitstore
            printf "\nQuitStore can now be accessed at localhost:5000\n"
        fi
    fi
fi
