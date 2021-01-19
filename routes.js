const express = require('express')
const route = express.Router()
const loginController = require('./controllers/loginController')
const cadastroController = require('./controllers/cadastroController')


route.post('/cadastro', cadastroController.criarCadastro)
route.get('/', loginController.logar)


module.exports = route;