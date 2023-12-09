const mongoose = require('mongoose')
const db = mongoose.connection;

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const AUTHDB= process.env.AUTHDB;
const DATABASE = process.env.DATABASE;

const information = `mongodb://${HOST}:${PORT}/${DATABASE}`;

const uri = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
mongoose.connect(uri)
    .catch(err => console.log(err));

db.once('open', _ => {
    console.log('La Base de datos esta conectada a', information)
})

db.on('error', err => {
    console.log(err)
})