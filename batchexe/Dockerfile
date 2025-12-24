FROM ubuntu:24.04

# 设置非交互模式，避免安装过程中的交互提示
ENV DEBIAN_FRONTEND=noninteractive

# 安装基础依赖
RUN apt-get update && \
    apt-get install -y \
        wget \
        curl \
        git \
        docker.io \
        openjdk-17-jdk \
        build-essential \
        libssl-dev \
        zlib1g-dev \
        libbz2-dev \
        libreadline-dev \
        libsqlite3-dev \
        llvm \
        libncursesw5-dev \
        xz-utils \
        tk-dev \
        libxml2-dev \
        libxmlsec1-dev \
        libffi-dev \
        liblzma-dev \
        python3 \
        python3-pip && \
    # 安装 nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    # 安装 pyenv
    curl https://pyenv.run | bash && \
    # 创建符号链接（保持与你原有逻辑一致）
    ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip && \
    # 清理缓存
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 设置环境变量以启用 nvm 和 pyenv
ENV NVM_DIR=/root/.nvm
ENV PYENV_ROOT=/root/.pyenv
ENV PATH=$PYENV_ROOT/bin:$NVM_DIR/versions/node/v*/bin:$PATH

# 加载 nvm 和 pyenv 到 shell 环境中
RUN echo 'export NVM_DIR="/root/.nvm"' >> /root/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /root/.bashrc && \
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> /root/.bashrc && \
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> /root/.bashrc && \
    echo 'eval "$(pyenv init --path)"' >> /root/.bashrc && \
    echo 'eval "$(pyenv init -)"' >> /root/.bashrc

WORKDIR /app

CMD ["/bin/bash", "-l"]
