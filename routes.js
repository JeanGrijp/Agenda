const express = require('express')
const route = express.Router()
const loginController = require('./controllers/loginController')



route.get('/', loginController)


module.exports = route;