FROM openjdk:latest

WORKDIR /src/java

COPY Main.java .

RUN javac Main.java

CMD ["java", "-cp", ".", "Main"]