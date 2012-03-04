#!/bin/bash
make
NODE_PATH=./lib forever start lib/app.js --port 8180
