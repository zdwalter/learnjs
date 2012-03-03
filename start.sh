#!/bin/bash
make
NODE_PATH=./lib:../db/lib:../log/lib:../task/lib:../auth/lib:../agent/lib:../visitor/lib forever start lib/app.js --port 80
