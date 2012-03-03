#!/bin/bash
make
mkdir -p /data/db/redis
echo "dbfilename /data/db/redis/ianalytics.rdb" > /data/db/redis/redis.conf
redis-server /data/db/redis/redis.conf > /dev/null &
mkdir -p /data/db/mongodb
mongod --dbpath /data/db/mongodb > /dev/null &
