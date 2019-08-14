FROM ubuntu:18.04
RUN apt-get update \
 && apt-get install -y git vim curl gcc g++ make libtool valgrind gdb strace cmake libmysqlcppconn-dev \
 && mkdir /project \
WORKDIR /project
 