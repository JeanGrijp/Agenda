const mongoose = require('mongoose');
const { default: validator } = require('validator');
const CadastroSchema = new mongoose.Schema({
    nome: {type: String, required:true},
    telefone: String,
    email: String,
    contatos: {},
    tarefas: {},
    usuario: {type: String, required: true},
    senha: {type: String, required: true}
})

const CadastroModel = mongoose.model('Cadastro', CadastroSchema)

module.exports = CadastroModel

class Cadastro  {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if(this.erros.length > 0) return;
        try {
            this.user = await CadastroModel.create(this.body)
        } catch(e) {
            console.log(e)
        }
    }

    valida() {
        this.cleanUp()
        if(!validator.isEmail(this.body.email)){
            this.erros.push("e-mail inválido")
        }

        if (this.body.senha.length < 3
            ||
            this.body.senha.length >= 50) {
                this.erros.push("a senha precisa ter entre 3 e 50 caracteres")
            }
    }

    cleanUp() {
        for(let key in this.body){
            if(typeof key !== 'string'){
                this.body[key] = this.body[key].toString();
            }
        }
    
        this.body = {
            nome: this.body.nome,
            telefone: this.body.telefone,
            email: this.body.email,
            tarefas: this.body.tarefas,
            contatos: this.body.contatos,
            usuario: this.body.usuario,
            senha: this.body.senha
        }
    
    }
}