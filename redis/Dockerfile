FROM redis:5.0.3

COPY redis.conf /etc/redis.conf
RUN echo net.core.somaxconn=1024 > /etc/rc.local && \
    echo 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' >> /etc/rc.local && \
    chmod 777 /etc/rc.local


CMD [ "redis-server", "/etc/redis.conf" ]