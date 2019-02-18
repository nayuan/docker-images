FROM registry.aliyuncs.com/acs-sample/jenkins-slave-dind:0.1
MAINTAINER nayuan<nayuan@vip.qq.com>

RUN mkdir /var/run/sshd && adduser --quiet jenkins && echo "jenkins:jenkins" | chpasswd \
    && groupadd docker && gpasswd -a jenkins docker