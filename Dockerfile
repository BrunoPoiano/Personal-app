FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install \ 
   && npm install && npm run build

EXPOSE 8080

CMD ["npx", "serve", "dist", "-l", "8080"]

