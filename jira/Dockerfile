FROM cptactionhank/atlassian-jira:7.9.2
MAINTAINER nayuan <nayuan@vip.qq.com>

USER root
RUN rm -rf /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/atlassian-extras-3.2.jar \
    && rm -rf /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/mysql-connector-java-5.1.39-bin.jar
COPY 3.2/*.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
USER daemon:daemon

ENV TZ=Asia/Shanghai