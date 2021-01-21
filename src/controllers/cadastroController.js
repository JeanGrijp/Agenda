const path = require('path')

const CadastroModel = require('../models/CadastroModel');

exports.inicial = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'))
    console.log(req.body)
}


exports.criarCadastro = (req, res) => {
    CadastroModel.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        contatos: req.body.contatos,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then(dados => console.log(dados).catch(e => console.log(e)))
}