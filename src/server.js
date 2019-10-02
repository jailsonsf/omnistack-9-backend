const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

require('dotenv/config');
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// GET, POST, PUT, DELETE

// req.query = filtro
// req.params = parametros, para editar e deletar
// req.body = corpo da requisição, para criar e editar
