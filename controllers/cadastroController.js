const CadastroModel = require('../models/CadastroModel')

// CadastroModel.create({
//     nome: 'Jean Grijp',
//     telefone: '081995033538',
//     email: 'grijpjean@gmail.com',
//     contatos: [{'Glenda': 995033538}],
//     usuario: 'JeanGrijp',
//     senha: '123'
// }).then(dados=>console.log(dados)).catch(e=>console.log(e))

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