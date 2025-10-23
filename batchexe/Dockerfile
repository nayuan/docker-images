FROM ubuntu:24.04

# 设置非交互模式，避免安装过程中的交互提示
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        wget \
        curl \
        git \
        docker.io \
        openjdk-17-jdk && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["/bin/bash", "-l"]
