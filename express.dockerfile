FROM node:12.6.0-alpine

WORKDIR /app

RUN apk update && \
    apk --no-cache add graphicsmagick pkgconfig autoconf automake libtool nasm build-base zlib-dev git openssh && \
    npm install -g express-generator nodemon webpack webpack-cli webpack-node-externals 
    # npm init
    # npm install --save-dev express swagger-jsdoc @types/express @types/node typescript ts-loader tslint tslint-loader tslint-config-airbnb
    #  cors swagger-ui-express swagger-jsdoc ts-node yamljs @types/swagger-ui-express @types/yamljs multer
    