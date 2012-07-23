.PHONY: all

all: d8

d8:
	tar zxf v8.tgz
	-@mkdir ../bin/
	cd v8 && scons arch=x64 d8 && cp d8 ../../bin/d8

