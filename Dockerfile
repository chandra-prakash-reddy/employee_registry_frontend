From node:6.17.1
MAINTAINER <ChandraPrakash Kistaiahgari (reddyp148@gmail.com)>

ADD package.json /package.json
ADD public /public
ADD server.js /server.js
ADD start.sh /start.sh

RUN npm install

ENTRYPOINT [ "sh", "-c", "./start.sh -s $SERVICE_HOST_PORT -u $HOST -p $PORT" ]
