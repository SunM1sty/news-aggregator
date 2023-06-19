# News Aggregator

## Environments

- [Proxy server](http://isuctschedule.ru:8000/)

- [Development](http://isuctschedule.ru:3000/)

## Architecture

 ![Architecture](https://github.com/SunM1sty/involta-test/assets/71171622/bca02edf-7711-4f31-a58f-207ec3f31565)
 ![State Architecture](https://github.com/SunM1sty/involta-test/assets/71171622/f52015cc-a485-4037-87b3-6af0e94c36f9)
 ![Filtering Architecture](https://github.com/SunM1sty/involta-test/assets/71171622/47d988ed-d9ed-409a-bef1-a3311d2f416c)

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
