FROM python:3.11

ENV LANG=C.UTF-8
RUN apt-get update && apt-get -y upgrade && apt-get install -y openjdk-11-jdk && echo 'Asia/Shanghai' > /etc/timezone && apt-get install libgl1-mesa-glx && apt-get install mesa-libGL
