const mongoose = require('mongoose')
const CadastroSchema = new mongoose.Schema({
    nome: {type: String, required:true},
    telefone: String,
    email: String,
    contatos: [],
    usuario: {type: String, required: true},
    senha: {type: String, required: true}
})

const CadastroModel = mongoose.model('Cadastro', CadastroSchema)

module.exports = CadastroModel