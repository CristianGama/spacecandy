FROM node:23.1.0-alpine3.20

WORKDIR /usr/src/app

COPY spacecandy/package.json .

RUN npm install

COPY . .

WORKDIR /usr/src/app/spacecandy

EXPOSE 5173

CMD ["npm", "run", "dev"]