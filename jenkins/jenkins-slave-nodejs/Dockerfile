FROM node:9.0
MAINTAINER nayuan<nayuan@vip.qq.com>

RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list
RUN apt-get update && apt-get -y upgrade && apt-get install -y git openssh-server && apt-get -t jessie-backports install -y openjdk-8-jdk
RUN mkdir /var/run/sshd && adduser --quiet jenkins && echo "jenkins:jenkins" | chpasswd

ENV CI=true
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]