FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
ADD ${JAR_FILE} home/e-auth/app.jar
ENTRYPOINT ["java","-jar","home/e-auth/app.jar"]