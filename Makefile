.PHONY: all build test deploy


COFFEE=node_modules/coffee-script/bin/coffee
NODE_PATH=./lib

build: clean 
	@$(COFFEE) -l -b -o lib src
	@echo Done! You can 'make all' to test

test: build
	-@killall redis-server 2> /dev/null
	-@killall mongod 2> /dev/null
	-@killall node 2> /dev/null
	@sleep 1
	@redis-server test/db/redis.conf > /dev/null &
	-@rm -rf /tmp/mongodb
	-@mkdir /tmp/mongodb
	@mongod --dbpath /tmp/mongodb > /dev/null &
	@sleep 1
	@NODE_ENV=test NODE_PATH=$(NODE_PATH) node lib/app.js --port 3001 > /tmp/test.log &
	@sleep 1
	@grep export test/*.coffee |grep -v '#exports' | sed -e 's/:exports\./ -o /' -e 's/ =.*//' | while read case; do echo $$case ; NODE_ENV=test NODE_PATH=$(NODE_PATH) expresso -s $$case; done
	@killall redis-server
	@killall mongod
	@killall node

coverage: build
	@node-jscoverage lib lib-cov
	-@killall redis-server 2> /dev/null
	@sleep 1
	@redis-server test/db/redis.conf > /dev/null &
	@sleep 1
	@NODE_ENV=test NODE_PATH=$(NODE_PATH) node lib/app.js --port 3001 > /tmp/test.log &
	@sleep 1
	@NODE_ENV=test NODE_PATH=lib-cov:$(NODE_PATH) expresso -s -c 2> reports/coverage | tee reports/coverage.summary
	@killall redis-server
	@killall node


clean:
	-@rm -rf lib/*
	-@rm -rf lib-cov
	-@rm -rf test.log
	-@make clean -C test

deploy: 
	# works for Walter only
	git push origin master
	git push deploy master
	ssh-add
	#ssh -A api.lvtu 'cd ~/lvtu.me/mobileapp/trainapp/server/route-api && git pull origin master && make && ./restart.sh'

all: build test
