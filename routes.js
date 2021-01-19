const express = require('express')
const route = express.Router()
const loginController = require('./src/controllers/loginController')
const cadastroController = require('./src/controllers/cadastroController')

route.get('/src/views/HTML/cadastro.html', cadastroController.inicial)
route.post('/cadastro', cadastroController.criarCadastro)
route.get('/src/assets/HTML/login', loginController.logar)


module.exports = route;