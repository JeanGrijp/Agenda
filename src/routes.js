const express = require('express');

const route = express.Router();

const SessionController = require('./controllers/SessionController');

route.post('/sessions', SessionController.store);

module.exports = route;
