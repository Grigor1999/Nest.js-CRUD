# buster is required to have a correct minimum Git version for husky
FROM node:12-buster

RUN mkdir /app \
  && chown -R node:node /app \
  && apt-get update \
  && apt-get install -y nano bash-completion \
  && npm completion > /etc/bash_completion.d/npm

RUN npm i -g @nestjs/cli@^6

WORKDIR /app
