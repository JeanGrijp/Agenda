const CadastroModel = require('../models/CadastroModel');

exports.criarCadastro = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    CadastroModel.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        contatos: req.body.contatos,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then(dados => console.log(dados).catch(e => console.log(e)))
}