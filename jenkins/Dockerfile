FROM node:alpine AS node
FROM jenkins/jenkins:latest
MAINTAINER nayuan <nayuan@vip.qq.com>

USER root
COPY --from=node /usr/local/bin/node /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/
COPY --from=node /usr/local/include/node/ /usr/local/include/node/
COPY --from=node /usr/local/lib/node_modules/ /usr/local/lib/node_modules/
COPY --from=node /usr/local/share/doc/node/ /usr/local/share/doc/node/
COPY --from=node /usr/local/share/man/man1/node.1 /usr/local/share/man/man1/
COPY --from=node /usr/local/share/systemtap/tapset/node.stp /usr/local/share/systemtap/tapset/
COPY --from=node /opt/yarn-* /opt/yarn/
RUN set -ex \
    apk add --no-cache libstdc++ \
    && ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
    && ln -s /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg

RUN echo '' > /etc/apt/sources.list.d/jessie-backports.list \
  && echo "deb http://mirrors.aliyun.com/debian jessie main contrib non-free" > /etc/apt/sources.list \
  && echo "deb http://mirrors.aliyun.com/debian jessie-updates main contrib non-free" >> /etc/apt/sources.list \
  && echo "deb http://mirrors.aliyun.com/debian-security jessie/updates main contrib non-free" >> /etc/apt/sources.list

# 安装 docker 依赖库
RUN apt update && apt install -y libltdl7