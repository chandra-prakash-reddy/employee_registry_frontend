From chandraprakashreddy/applications:mynode-6.0

ADD package.json /package.json
ADD public /public
ADD server.js /server.js
ADD start.sh /start.sh

RUN npm install

ENTRYPOINT [ "sh", "-c", "./start.sh -s $SERVICE_HOST_PORT -u $HOST -p $PORT" ]