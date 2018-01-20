#!/usr/bin/env bash

cd /app || exit 1
if [[ ! -f package-lock.json ]] ; then
  npm install
fi
npm run dev
