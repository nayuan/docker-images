FROM openjdk:17
MAINTAINER nayuan <nayuan@vip.qq.com>

ARG USER_HOME_DIR="/root"
ARG NODE_VERSION=20

ENV MAVEN_CONFIG="$USER_HOME_DIR/.m2"
ENV MAVEN_HOME=/usr/share/maven
ENV NVM_DIR=/root/.nvm

RUN echo 'Asia/Shanghai' >/etc/timezone

COPY --from=maven:3.9.11 ${MAVEN_HOME} ${MAVEN_HOME}

RUN ln -s ${MAVEN_HOME}/bin/mvn /usr/bin/mvn && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"
# set ENTRYPOINT for reloading nvm-environment
ENTRYPOINT ["bash", "-c", "source $NVM_DIR/nvm.sh && exec \"$@\"", "--"]

CMD ["/bin/bash"]
