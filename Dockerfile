FROM daocloud.io/node:8.5-alpine

MAINTAINER yuliang<yu.liang@freelog.com>

ARG VERSION=3.2.0

LABEL version=$VERSION

RUN mkdir /gitbook
WORKDIR /gitbook
COPY . /gitbook

RUN npm install --global gitbook-cli &&\
	gitbook fetch 3.2.0 &&\
	gitbook install --save

EXPOSE 4000 35729

CMD gitbook serve