const mongoose = require('mongoose')
const db = mongoose.connection;

const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const AUTHDB= process.env.AUTHDB;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

const information = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
console.log(uri)
mongoose.connect(uri)
    .catch(err => console.log(err));

db.once('open', _ => {
    console.log('La Base de datos esta conectada a', information)
})

db.on('error', err => {
    console.log(err)
})