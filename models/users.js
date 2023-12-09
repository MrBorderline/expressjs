// obtengo funciones de mongoose, cargo toda la libreria
const { Schema, model } = require('mongoose');

//  se genera un esquema userSchema que se instancia como nueva CLASE y generamos una constante.
// tambien definimos el tipo de dato.
const usersSchema = new Schema({
    user: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    mail: {
        type: String,
        unique: true,
    }
})

// Module Export se utiliza en otras partes de la app gral.  
//model es para interactuar con la DB insertar, actualizar, borrar,etc.
module.exports = model('users', usersSchema)