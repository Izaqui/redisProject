const express = require('express');

//Criar e adicionar rotas
const User = require('./');

//const connection = require('./database');

const routes = express.Router();

//Rotas de usuario
routes.get('/usuario', User.index);
routes.post('/usuario', User.create);
routes.delete('usuario/:email', User.delete);


module.exports = routes;