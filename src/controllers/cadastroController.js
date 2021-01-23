const path = require('path');

const Cadastro = require('../models/CadastroModel');

exports.inicial = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'))
}

exports.registra = async function(req, res) {
  try {
    const cadastro = new Cadastro(req.body);
    await cadastro.register();
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'));
  }
};