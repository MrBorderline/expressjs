// index.js
const express = require('express');
const mongoose = require('mongoose');
const { connectToDatabase, closeDatabaseConnection } = require('./db');
const usersSchema = require('../models/users'); // Reemplazar con el nombre real de tu modelo

const app = express();
const PORT = 3000;

// Middleware para manejar el cuerpo de la solicitud JSON
app.use(express.json());

// Endpoint para actualizar un dato en la base de datos
app.post('/', async (req, res) => {
    try {
        // Conectar a la base de datos
        await connectToDatabase();

    // Actualizar el dato utilizando el modelo/schema correspondiente
    const updatedData = await usersSchema.findOneAndUpdate(
        { /* Condición de búsqueda */ },
        { $set: { /* Campos a actualizar */ } },
        { new: true }
        );

    // Enviar la respuesta actualizada como JSON
    res.json(updatedData);
  } catch (error) {
    console.error('Error al actualizar el dato:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión a la base de datos después de la operación
    await closeDatabaseConnection();
  }
});

// Iniciar el servidor
app.listen( 3001, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});