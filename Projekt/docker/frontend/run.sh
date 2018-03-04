#!/usr/bin/env bash
cd $HOME/app || exit 1
if [[ ! -d node_modules ]] ; then
  npm install
fi
npm run dev
