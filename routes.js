const express = require('express')

const route = express.Router()
const loginController = require('./src/controllers/loginController')
const cadastroController = require('./src/controllers/cadastroController')


route.get('/', loginController.inicial)
route.get('/cadastro', cadastroController.inicial)
route.post('/cadastro', cadastroController.register)


module.exports = route;