require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routes = require('../../../routes')
const mongoose = require('mongoose')
mongoose.connect(process.env.CHAVE1, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database conectada')
    app.emit('DBok')
}).catch(e => console.log(e))


app.use(express.urlencoded({extended: true}))
console.log(path.resolve(__dirname, '..', '..', '..', 'public'))
app.use(express.static(path.resolve(__dirname, '..', '..', '..', 'public')))
app.use(express.json())
app.use(routes)
// app.set('views', path.resolve(__dirname, 'src', 'views', 'HTML'))
// app.set('view engine', 'ejs')
// app.engine('html', require('html'))


app.on('DBok', () => {
    app.listen(3333, () => {
        console.log(' oi executando em http://localhost:3333/cadastro')
    })
})