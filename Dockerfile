FROM node

RUN apt-get update 
RUN mkdir /parsewebhook
ADD parsewebhook /parsewebhook
WORKDIR /parsewebhook
RUN npm install adaptivecards-templating adaptivecards adaptive-expressions
RUN npm install

ENTRYPOINT [ "npm", "run-script", "webhook" ]