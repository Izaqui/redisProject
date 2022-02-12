const express = require('express');

//Criar e adicionar rotas
//const User = require('./');


const SessionCache = require('./Services/SessionCache');

const database = require('./database/database');

const routes = express.Router();

routes.post('/session', SessionCache.create);

//Rotas de usuario
routes.get('/users', database.getUser);
routes.post('./users',database.add)
//routes.up('/users', connection.up);
routes.delete('users/:email', database.delet);

module.exports = routes;