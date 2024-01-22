const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');  // Agrega esta línea

const app = express();
const PORT = process.env.PORT || 3000;
const USERSRV = process.env.USERSRV ;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Agrega esta línea

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', async (req, res) => {
    const { user, password, name, mail } = req.body;

  // Puedes hacer una solicitud al microservicio aquí
  // Por ejemplo, utilizando axios
    try {
    const response = await axios.post( `http://${USERSRV}:3000/create-user`, {
        user,
        password,
        name,
        mail,
    });

    // Manejar la respuesta del microservicio según sea necesario
    console.log(response.data);

    res.render('index', { message: "Datos enviados correctamente" });
    } catch (error) {
    console.error(error);
    res.render('index', { error: "Hubo un error al enviar los datos" });
    }
});

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en http://localhost:${PORT}`);
});
