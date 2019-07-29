FROM node:12.6.0-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm @vue/cli
    # npm install --save-dev pug pug-plain-loader axios https-agent @types/node firebase

EXPOSE 8000
