FROM openjdk:8-jdk-alpine
ARG JAR_FILE=e-onboarding-backend/target/*.jar
ADD ${JAR_FILE} home/e-onboarding/app.jar
ENTRYPOINT ["java","-jar","home/e-onboarding/app.jar"]