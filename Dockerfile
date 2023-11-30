FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV production
COPY . .

RUN npm install 
RUN npm install -g pm2
EXPOSE 3000
CMD [ "pm2-runtime", "index.js" ]