// db.js
const mongoose = require('mongoose');

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const AUTHDB= process.env.AUTHDB;
const DATABASE = process.env.DATABASE;

const information = `mongodb://${HOST}:${PORT}/${DATABASE}`;

const uri = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
const connectToDatabase = async () => {
  try {
    // const dbURI = 'tu_conexion_a_la_db'; // Reemplazar con tu conexión real
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

const closeDatabaseConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Conexión a la base de datos cerrada');
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error);
  }
};

module.exports = { connectToDatabase, closeDatabaseConnection };
