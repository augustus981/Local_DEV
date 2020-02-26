FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
ADD ${JAR_FILE} home/e-data/app.jar
ENTRYPOINT ["java","-jar","home/e-data/app.jar"]