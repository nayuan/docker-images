
FROM openjdk:8-alpine

RUN apk add --no-cache bash gettext nmap-ncat openssl busybox-extras

RUN addgroup --gid 3000 rocketmq \
    && adduser --uid 3000 -G rocketmq rocketmq -s /bin/bash -D

# Rocketmq version
ENV ROCKETMQ_VERSION 4.7.0

# Rocketmq home
ENV ROCKETMQ_HOME  /home/rocketmq/rocketmq-4.7.0

WORKDIR  ${ROCKETMQ_HOME}

# Install
RUN set -eux; \
    apk add --virtual .build-deps curl gnupg unzip; \
    curl https://archive.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-bin-release.zip -o rocketmq.zip; \
    unzip rocketmq.zip; \
	mv rocketmq-all*/* . ; \
	rmdir rocketmq-all* ; \
	rm rocketmq.zip; \
	apk del .build-deps ; \
    rm -rf /var/cache/apk/* ; \
    rm -rf /tmp/*

# Copy customized scripts
COPY scripts/ ${ROCKETMQ_HOME}/bin/

RUN chown -R 3000:3000 ${ROCKETMQ_HOME}

# Expose namesrv port
EXPOSE 9876

# Override customized scripts for namesrv
RUN mv ${ROCKETMQ_HOME}/bin/runserver-customize.sh ${ROCKETMQ_HOME}/bin/runserver.sh \
 && chmod a+x ${ROCKETMQ_HOME}/bin/runserver.sh \
 && chmod a+x ${ROCKETMQ_HOME}/bin/mqnamesrv

# Expose broker ports
EXPOSE 10909 10911 10912

# Override customized scripts for broker
RUN mv ${ROCKETMQ_HOME}/bin/runbroker-customize.sh ${ROCKETMQ_HOME}/bin/runbroker.sh \
 && chmod a+x ${ROCKETMQ_HOME}/bin/runbroker.sh \
 && chmod a+x ${ROCKETMQ_HOME}/bin/mqbroker

# Export Java options
RUN export JAVA_OPT=" -Duser.home=/opt"

# Add ${JAVA_HOME}/lib/ext as java.ext.dirs
RUN sed -i 's/${JAVA_HOME}\/jre\/lib\/ext/${JAVA_HOME}\/jre\/lib\/ext:${JAVA_HOME}\/lib\/ext/' ${ROCKETMQ_HOME}/bin/tools.sh

USER rocketmq

WORKDIR ${ROCKETMQ_HOME}/bin
