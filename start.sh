#!/bin/bash

while getopts ":s:u:p:" opt; do
  case $opt in
    s) service="$OPTARG"
    ;;
    u) ui="$OPTARG"
    ;;
    p) port="$OPTARG"
    ;;
    \?) echo "Usage ./start.sh -s <service_host:port> -u <ui_host> -p <ui_port>" 
        exit 1
    ;;
  esac
done

if [ -z "$service"  ] || [ -z "$ui" ] || [ -z "$port" ]; then
   echo "Usage ./start.sh -s <service_host:port> -u <ui_host> -p <ui_port>"
   exit 1
fi

javascript="const services_host='http://"$service"';const ui_host='http://"$ui":"$port"';"
sed -i '1d' ./public/app/global.js
(echo $javascript && cat ./public/app/global.js) > filename1 && mv filename1 ./public/app/global.js
echo $javascript
echo "node server.js" $port
node server.js $port
