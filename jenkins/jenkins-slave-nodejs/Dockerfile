FROM registry.cn-shenzhen.aliyuncs.com/longmao-third-tools/jenkins-slave-dind:1.0.0
MAINTAINER nayuan<nayuan@vip.qq.com>

ENV PATH /root/bin:$PATH

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 9.9.0

ADD node-v9.9.0-linux-x64.tar.xz /root

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