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
    # 创建符号链接
    ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip && \
    # 清理缓存
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 安装 Miniconda
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh && \
    bash miniconda.sh -b -p /opt/conda && \
    rm miniconda.sh

# 设置环境变量
ENV PATH="/opt/conda/bin:$PATH"
ENV NVM_DIR=/root/.nvm

# 配置 shell 环境
RUN echo 'export NVM_DIR="/root/.nvm"' >> /root/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /root/.bashrc && \
    echo 'export PATH="/opt/conda/bin:$PATH"' >> /root/.bashrc

# 创建并配置 Conda 环境
RUN conda init bash && \
    conda create -n cssc python=3.12 -y && \
    echo "conda activate cssc" >> /root/.bashrc

# 激活环境并安装 Python 包
RUN /bin/bash -c "source /opt/conda/bin/activate && \
    conda activate cssc && \
    pip install opencv-python mediapipe==0.10.21 python-ffmpeg"

WORKDIR /app

# 设置默认启动命令（激活 conda 环境）
CMD ["/bin/bash", "-c", "source /opt/conda/bin/activate cssc && /bin/bash"]
