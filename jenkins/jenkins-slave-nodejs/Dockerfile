FROM registry.cn-shenzhen.aliyuncs.com/longmao-third-tools/jenkins-slave-dind:1.0.0
MAINTAINER nayuan<nayuan@vip.qq.com>

ENV PATH /root/bin:$PATH

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 9.9.0

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
  && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
  && rm "node-v$NODE_VERSION-linux-x64.tar.xz"

RUN set -x \
    && apt-get -qq update \
    && apt-get install -qqy apt-utils \
    && apt-get -qq upgrade \
    && apt-get -qq dist-upgrade \
    && apt-get install -qqy \
        npm \
        sudo \
        wget

CMD ["/usr/sbin/sshd", "-D"]