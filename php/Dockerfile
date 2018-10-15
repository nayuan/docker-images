FROM php:5.6-apache
MAINTAINER nayuan <nayuan@vip.qq.com>

RUN docker-php-ext-install pdo_mysql && \
    docker-php-ext-install mysql

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone