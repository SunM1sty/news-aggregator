FROM node:latest

RUN mkdir -p /frontend
WORKDIR /frontend

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000
