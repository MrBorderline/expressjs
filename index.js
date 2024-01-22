const express = require('express')
const fs = require('fs')
const { request } = require('http')
const app = express()
bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());



// llamada y realizacion de conexion con base de datos utilizando mongoose
require('./db')
// Constante Users obteniendo models propio de mongoose para manejo de datos en mongodb 
const Users = require('./models/users')

const PORT = process.env.PORT || 3000;


app.post('/create-user', async (req, res) => {
    try {
        const { user, password, name, mail } = req.body;
        const newUser = new Users({
        user,
        password,
        name,
        mail,
        });
        const usersSave = await newUser.save();
        res.status(201).json(usersSave);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });

        // res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

  // Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

// Las funciones asíncronas (async function) en JavaScript se utilizan para simplificar y gestionar mejor el código 
// en situaciones donde se realizan operaciones asíncronas, como llamadas a APIs, lecturas/escrituras de archivos, 
// o consultas a bases de datos. Estas funciones están diseñadas para trabajar de manera síncrona dentro del código,
// incluso cuando realizan operaciones que toman un tiempo significativo 
// async function main () {
//     const users = new Users({
//         user: 'user2',
//         password: 'password1',
//         name: "Nobre Usuario 2",
//         mail: "user2@user.com"
//     });
//     // guardamos en una constanta con el tiempo de espera de ejecucion de users.save y luego  la consultamos con console.log
//     // mongo te brinda un valor extra "_v" cuando ya fue guardada en db, mejor entendimiento.
//     const usersSave = await users.save();

//     //como puedo manejarlo como una promesa podemos cambiar console.log por un return y hacer uso en la funcion por fuera con
//     // then y catch.
//     return usersSave // console.log(usersSave);
// }

// main()
// // esto se podria eliminar volviendo a console.log(usersSave); en la funcion main
//     .then(usersSave => console.log(usersSave)) 
//     .catch(err => console.log(err))
