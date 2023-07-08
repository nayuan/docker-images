FROM python:3.11

ENV LANG=C.UTF-8
RUN apt-get update 
RUN apt-get -y upgrade 
RUN apt-get install -y software-properties-common 
RUN add-apt-repository ppa:openjdk-r/ppa
RUN apt-get install -y openjdk-11-jdk 
RUN echo 'Asia/Shanghai' > /etc/timezone 
RUN apt-get install libgl1-mesa-glx 
RUN apt-get install mesa-libGL
