FROM node:9.0

# Add backports
RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list

# Upgrade and Install packages
RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y git openssh-server \
    && apt-get -t jessie-backports install -y openjdk-8-jdk

RUN mkdir /var/run/sshd && adduser --quiet jenkins && echo "jenkins:jenkins" | chpasswd
USER root
RUN apt-get update -qq \
    && wget https://bootstrap.pypa.io/get-pip.py \
    && python get-pip.py \
    && apt-get install --no-install-recommends -qqy rsync curl wget apt-transport-https lsb-release ca-certificates gnupg2 software-properties-common zip unzip \
    && pip install ansible awscli boto \
    && curl -o /usr/local/bin/ecs-cli https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-linux-amd64-latest \
    && chmod +x /usr/local/bin/ecs-cli \
    && curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg | apt-key add - \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") $(lsb_release -cs) stable" \
    && apt-get update -qq \
    && apt-get install -qqy --no-install-recommends docker-ce \
    && usermod -aG docker jenkins \
    && apt-get remove -y gnupg2 lsb-release software-properties-common \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

USER jenkins

ENV CI=true
EXPOSE 22

WORKDIR /home/jenkins

CMD ["/usr/sbin/sshd", "-D"]