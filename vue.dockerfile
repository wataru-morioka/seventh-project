FROM node:12.6.0-alpine

WORKDIR /app

RUN apk update && \
    apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev git openssh && \
    npm install -g npm @vue/cli gulp-cli && \
    mkdir /root/.ssh
    # npm init
    # npm install --save pug pug-plain-loader axios https-agent @types/node firebase npm-run-all firebase-tools sw-offline-google-analytics
    #gulp gulp-exec gulp-imagemin imagemin-jpeg-recompress imagemin-pngquant imagemin-svgo imagemin-gifsicle imagemin-webp gh-pages@2.0
    
EXPOSE 8000
