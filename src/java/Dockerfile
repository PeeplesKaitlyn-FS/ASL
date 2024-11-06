FROM openjdk:latest

WORKDIR /src

COPY Main.java .

RUN javac Main.java

CMD ["java", "-cp", ".", "Main"]