require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('../../../routes')
const mongoose = require('mongoose')
mongoose.connect(process.env.CHAVE1, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database conectada')
    app.emit('DBok')
}).catch(e => console.log(e))

app.use(express.urlencoded({extended: true}))
app.use(routes)



app.on('DBok', () => {
    app.listen(3333, () => {
        console.log('executando em http://localhost:3333')
    })
})