FROM php:5.3.29-apache
MAINTAINER nayuan <nayuan@vip.qq.com>

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
