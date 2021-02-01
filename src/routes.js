const express = require('express');

const route = express.Router();

const SessionController = require('./controllers/SessionController');
const TarefaController = require('./controllers/tarefaController');

route.post('/tarefas', TarefaController.store);
route.post('/sessions', SessionController.store);

module.exports = route;