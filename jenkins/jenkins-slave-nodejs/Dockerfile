FROM registry.cn-shenzhen.aliyuncs.com/longmao-third-tools/jenkins-slave-dind:1.0.0
MAINTAINER nayuan<nayuan@vip.qq.com>

ENV PATH /root/bin:$PATH

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 9.9.0

ADD node-v9.9.0-linux-x64.tar.xz /root

CMD ["/usr/sbin/sshd", "-D"]