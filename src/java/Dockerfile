FROM openjdk:latest

WORKDIR /app

COPY java/Main.java /app/

RUN javac Main.java

CMD ["java", "-cp", "/app", "com.example.Main"]