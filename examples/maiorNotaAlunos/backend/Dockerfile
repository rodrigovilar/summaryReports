FROM maven:3.5.2-jdk-8-alpine AS MAVEN_TOOL_CHAIN

COPY pom.xml /tmp/
RUN mvn -DskipTests=true -B dependency:go-offline -f /tmp/pom.xml -s /usr/share/maven/ref/settings-docker.xml
COPY src /tmp/src/
WORKDIR /tmp/
RUN mvn -DskipTests=true -B -s /usr/share/maven/ref/settings-docker.xml verify


FROM java:openjdk-8-jdk-alpine

RUN mkdir /app
COPY --from=MAVEN_TOOL_CHAIN /tmp/target/*.jar /app/app.jar

# to create a modification date
RUN sh -c 'touch /app/app.jar'

# creates a mount point
VOLUME /tmp

CMD ["java", "-jar", "/app/app.jar", "--spring.profiles.active=prod"]

EXPOSE 8080
