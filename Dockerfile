FROM node:7.5-alpine

MAINTAINER Roman Krivetsky <r.krivetsky@gmail.com>

ARG VERSION=3.2.0

LABEL version=$VERSION

RUN npm install --global gitbook-cli &&\
	gitbook fetch ${VERSION} &&\
	npm cache clear &&\
	rm -rf /tmp/*

RUN mkdir /gitbook
WORKDIR /gitbook
COPY . /gitbook

RUN gitbook install

EXPOSE 4000 35729

CMD /usr/local/bin/gitbook serve