FROM node:14
RUN npm install -g @vapid/cli --unsafe-perm

COPY ./package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install

RUN mkdir -p /usr/src/app/data
EXPOSE 3000
CMD ["vapid", "start"]
