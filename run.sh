#!/usr/bin/env bash

python -m http.server 8000 &
pid[0]=$!
python -m http.server 8080 &
pid[1]=$!
trap "kill ${pid[0]} ${pid[1]}; exit 1" INT
wait
