const path = require('path')

exports.logar = () => {
    console.log('oi')
}

exports.inicial = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/HTML/login.html'))
}