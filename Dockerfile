FROM node

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY tsconfig.json ./

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD ["yarn", "develop"]