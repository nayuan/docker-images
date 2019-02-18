FROM node:9.0

# Add backports
RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list

# Upgrade and Install packages
RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y git openssh-server \
    && apt-get -t jessie-backports install -y openjdk-8-jdk \
    && curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# Prepare container for ssh
RUN mkdir /var/run/sshd && adduser --quiet jenkins && echo "jenkins:jenkins" | chpasswd

ENV CI=true
EXPOSE 22

USER jenkins
WORKDIR /home/jenkins

CMD ["/usr/sbin/sshd", "-D"]