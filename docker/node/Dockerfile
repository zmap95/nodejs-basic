FROM node:14-alpine as build

USER root
RUN npm install -g nodemon

RUN mkdir -p /app/src
WORKDIR /app/src

COPY ./src/package.json .
# COPY ./src/package-lock.json .
RUN npm install

CMD [ "nodemon", "index.js"]