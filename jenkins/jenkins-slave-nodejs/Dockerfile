FROM node:9.0

# Add backports
RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list

# Upgrade and Install packages
RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y git openssh-server \
    && apt-get -t jessie-backports install -y openjdk-8-jdk

RUN mkdir /var/run/sshd && adduser --quiet jenkins && echo "jenkins:jenkins" | chpasswd

USER jenkins

ENV CI=true
EXPOSE 22

WORKDIR /home/jenkins

CMD ["/usr/sbin/sshd", "-D"]