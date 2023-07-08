FROM python:3.11-rc

ENV LANG=C.UTF-8
ENV JAVA_VERSION=11.0.16
ENV JAVA_HOME /usr/local/openjdk-11
RUN { echo '#/bin/sh'; echo 'echo "$JAVA_HOME"'; } > /usr/local/bin/docker-java-home && chmod +x /usr/local/bin/docker-java-home && [ "$JAVA_HOME" = "$(docker-java-home)" ] # backwards compatibility
ENV PATH $JAVA_HOME/bin:$PATH

RUN set -eux; \
	echo 'Asia/Shanghai' > /etc/timezone; \
	wget -O openjdk.tgz https://static.libs.longmaosoft.com/soft/OpenJDK11U-jdk_aarch64_linux_11.0.16_8.tar.gz; \
	mkdir -p "$JAVA_HOME"; \
	tar --extract \
		--file openjdk.tgz \
		--directory "$JAVA_HOME" \
		--strip-components 1 \
		--no-same-owner; \
	rm openjdk.tgz*; \
	apt-get update; \
	apt-get -y upgrade; \
	apt-get -y install libgl1-mesa-glx; \
	apt-get -y install mesa-libGL
