FROM cptactionhank/atlassian-jira:7.9.2
MAINTAINER nayuan <nayuan@vip.qq.com>

RUN chmod 777 /opt/atlassian/jira/atlassian-jira/WEB-INF/lib \
    && rm -rf /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/atlassian-extras-3.2.jar \
    && rm -rf /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/mysql-connector-java-5.1.39-bin.jar
COPY 3.2/*.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone