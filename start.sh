#!/bin/bash
make
NODE_PATH=./src coffee src/app.coffee --port 8180
