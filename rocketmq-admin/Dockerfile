FROM openjdk:8
MAINTAINER nayuan <nayuan@vip.qq.com>

ENV DOMAIN 'mqcloud.com'
ENV SERVER_PORT '8080'
ENV DATABASE_URL 'jdbc:mysql://127.0.0.1:3306/mq-cloud?useUnicode=true&characterEncoding=UTF-8'
ENV DATABASE_USERNAME 'root'
ENV DATABASE_PASSWORD ''

ADD app.jar app.jar
CMD java -jar app.jar
