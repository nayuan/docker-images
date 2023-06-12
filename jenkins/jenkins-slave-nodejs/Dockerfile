FROM node:10.16.0

# Add backports
# RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list

# Upgrade and Install packages
RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y git openssh-server
RUN apt-get install -y openjdk-11-jdk
RUN apt-get install mime-support
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN echo 'Asia/Shanghai' > /etc/timezone
# Prepare container for ssh
RUN mkdir /var/run/sshd && echo "root:root" | chpasswd
RUN echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config & \
    echo 'UsePAM no' >> /etc/ssh/sshd_config

ENV CI=true
EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
