const path = require('path');
const { patch } = require('../../routes');

const CadastroModel = require('../models/CadastroModel');

exports.inicial = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'))
    console.log(req.body)
}


exports.criarCadastro = (req, res) => {
    console.log("chegou")
    CadastroModel.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        tarefas: req.body.tarefas,
        contatos: req.body.contatos,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then(dados => {
        console.log(dados)
        res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'))
    })
}