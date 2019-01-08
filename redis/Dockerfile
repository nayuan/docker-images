FROM redis:5.0.3

COPY redis.conf /etc/redis.conf
RUN echo 511 > /proc/sys/net/core/somaxconn && \
    echo never > /sys/kernel/mm/transparent_hugepage/enabled

CMD [ "redis-server", "/etc/redis.conf" ]