FROM openjdk:latest

WORKDIR /app

COPY java/Main.java /app/

RUN javac Main.java
RUN ls -l Main.class

CMD ["java", "Main"]