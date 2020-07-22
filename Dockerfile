FROM node:lts-alpine

ENV CONTAINER_PATH /var/www/alianca-rebelde

WORKDIR $CONTAINER_PATH

RUN npm install -g @vue/cli

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "run", "serve"]