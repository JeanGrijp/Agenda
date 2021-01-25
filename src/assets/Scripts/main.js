require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routes = require('../../../routes')
const mongoose = require('mongoose')
const session = require("express-session")
const flash = require("connect-flash")
const MongoStore = require('connect-mongo')(session)
const helmet = require('helmet')
const csrf = require('csurf')


const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('../../middlewares/middleware');


mongoose.connect(process.env.CHAVE1, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database conectada')
    app.emit('DBok')
}).catch(e => console.log(e))

app.use(helmet())
app.use(express.urlencoded({extended: true}))
console.log(path.resolve(__dirname, '..', '..', '..', 'public'))
app.use(express.static(path.resolve(__dirname, '..', '..', '..', 'public')))
app.use(express.json())
const sessionOptions = session({
    secret: "shausghu sahughas 1454 4s54 @@@@@ #",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.use(csrf());
//  middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes)



// app.set('views', path.resolve(__dirname, 'src', 'views', 'HTML'))
// app.set('view engine', 'ejs')
// app.engine('html', require('html'))


app.on('DBok', () => {
    app.listen(3333, () => {
        console.log(' oi executando em http://localhost:3333/cadastro')
    })
})