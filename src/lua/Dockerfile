FROM alpine

WORKDIR /app

RUN apk add lua5.4

CMD ["lua5.4", "-e", "print('Hello ASL! ' .. os.date('%Y-%m-%d %H:%M:%S'))"]