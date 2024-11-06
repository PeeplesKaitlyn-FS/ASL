FROM alpine:latest

RUN apk add --no-cache lua

WORKDIR /src/lua

COPY main.lua .

CMD ["lua", "main.lua"]