FROM elasticsearch:6.4.2
MAINTAINER nayuan <nayuan@vip.qq.com>

RUN rm -rf /usr/share/elasticsearch/modules/x-pack-core/x-pack-core-6.4.2.jar && \
    echo vm.max_map_count=655360 >> /etc/sysctl.conf && \
    echo * soft memlock unlimited >> /etc/security/limits.conf && \
    echo * hard memlock unlimited >> /etc/security/limits.conf
COPY x-pack-core-6.4.2.jar /usr/share/elasticsearch/modules/x-pack-core/

