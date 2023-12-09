FROM node:18-alpine
WORKDIR /app
COPY . .
USER root
RUN apk update ; apk add curl net-tools inetutils-telnet vim
RUN npm install ; npm install mongoose
RUN npm install -g pm2

# encapsulamiento de usuario sin privilegios extendidos
RUN addgroup -S allusers && adduser -S -G allusers appuser && chmod u+s /bin/ping
RUN  chown -R appuser:allusers /app 
USER appuser
EXPOSE 3000

# CMD [ "pm2-runtime", "index.js" ]
