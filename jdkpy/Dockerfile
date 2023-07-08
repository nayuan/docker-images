FROM openjdk:11

ENV LANG=C.UTF-8
RUN apt-get update 
RUN apt-get -y upgrade 
RUN apt-get install software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get -y install python3.8
RUN echo 'Asia/Shanghai' > /etc/timezone 
RUN apt-get install libgl1-mesa-glx 
RUN apt-get install mesa-libGL
