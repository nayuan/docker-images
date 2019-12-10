FROM jenkins/jenkins:latest

USER root

RUN apt-get update && apt-get install -y libltdl7 && apt-get install mime-support && echo 'Asia/Shanghai' >/etc/timezone
