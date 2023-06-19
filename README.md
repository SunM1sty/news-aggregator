# News Aggregator

## Environments

- [Proxy server](http://isuctschedule.ru:8000/)

- [Development](http://isuctschedule.ru:3000/)

## Architecture

 ![App Architecture](https://github.com/SunM1sty/news-aggregator/assets/71171622/b3d084cc-cb52-4f3b-8d83-e12dec53f015)
 ![State Architecture](https://github.com/SunM1sty/news-aggregator/assets/71171622/3d1263f3-5f74-44a7-a4ed-efab969c5626)
 ![Parsing RSS feed Architecture](https://github.com/SunM1sty/news-aggregator/assets/71171622/6d33f229-9fa3-4fbe-ad98-6bad8c841844)

### Install
Requirements:
- Docker & docker-compose
- Git
- Node.js

Clone repo:
 - by https protocol: git clone https://github.com/SunM1sty/involta-test
 - via SSH: git clone git@github.com:SunM1sty/involta-test.git

Without docker:
```
npm ci

# For Development
npm run dev

# For Production
npm run build
npm run start

# Static Project
npm run generate
```
With docker and docker-compose (Coming soon):
* On linux: if you dont't add docker/docker-compose package as super user, you should use **sudo**
```
sudo docker-compose up / docker-compose up
```
