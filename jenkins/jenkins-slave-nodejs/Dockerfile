FROM evarga/jenkins-slave:latest
MAINTAINER nayuan<nayuan@vip.qq.com>

USER root

ENV DEBIAN_FRONTEND noninteractive
ENV PATH /root/bin:$PATH
ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 9.9.0

# Adapted from: https://registry.hub.docker.com/u/jpetazzo/dind/dockerfile/
# Let's start with some basic stuff.
RUN apt-get update -qq && apt-get install -qqy \
apt-transport-https \
ca-certificates \
curl \
lxc \
git \
gcc \
make \
zlib1g \
zlib1g.dev \
openssl \
libssl-dev \
iptables && \
update-ca-certificates -f && \
rm -rf /var/lib/apt/lists/*

ENV DOCKER_CHANNEL stable
ENV DOCKER_VERSION 17.03.1-ce

RUN curl -fL -o docker.tgz "https://download.docker.com/linux/static/${DOCKER_CHANNEL}/x86_64/docker-${DOCKER_VERSION}.tgz" \
	&& tar -xzvf docker.tgz \
	&& mv docker/* /usr/local/bin/ \
	&& rmdir docker \
	&& rm docker.tgz \
	&& chmod +x /usr/local/bin/docker

ADD node-v9.9.0-linux-x64.tar.xz /root

CMD ["/usr/sbin/sshd", "-D"]