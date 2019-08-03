FROM node:12.6.0-alpine

WORKDIR /app

RUN apk update && \
    apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev && \
    npm install -g npm @vue/cli firebase-tools gulp-cli && \
    npm init
    # npm install --save pug pug-plain-loader axios https-agent @types/node firebase npm-run-all
    #gulp gulp-exec gulp-imagemin imagemin-jpeg-recompress imagemin-pngquant imagemin-svgo imagemin-gifsicle imagemin-webp
    
EXPOSE 8000
