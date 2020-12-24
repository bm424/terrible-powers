FROM node:14
RUN npm install -g @vapid/cli --unsafe-perm

COPY ./package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install

COPY ./tailwind.config.js /usr/src/app/tailwind.config.js
COPY ./custom.css /usr/src/app/custom.css
COPY ./www /usr/src/app/www
ENV NODE_ENV=production
RUN npx tailwindcss-cli@latest build ./custom.css -c ./tailwind.config.js -o ./www/stylesheets/site.pack.scss

RUN mkdir -p /usr/src/app/data
EXPOSE 3000
CMD ["vapid", "start"]
