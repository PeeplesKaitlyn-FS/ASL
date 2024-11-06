FROM alpine

WORKDIR /src/lua

RUN apk add lua5.4

COPY main.lua .

CMD ["lua", "main.lua"]