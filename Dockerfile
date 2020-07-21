FROM node:lts-alpine

RUN yarn globall add @vue/cli
# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./

# instala dependências do projeto
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "serve" ]