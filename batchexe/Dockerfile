FROM ubuntu:24.04

# 设置非交互模式，避免安装过程中的交互提示
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        wget \
        curl \
        git \
        docker.io \
        openjdk-17-jdk \
        python3 \
        python3-pip \
        python3-venv \
        python3-dev \
        build-essential && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["/bin/bash", "-l"]
