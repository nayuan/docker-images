FROM ubuntu:20.04

ENV LANG=C.UTF-8

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install python-software-properties
RUN add-apt-repository ppa:fkrull/deadsnakes
RUN apt-get update
RUN apt-get -y install openjdk-11-jdk
RUN apt-get -y install python3.11
