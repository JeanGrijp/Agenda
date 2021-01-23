const path = require('path');
const { patch } = require('../../routes');

const CadastroModel = require('../models/CadastroModel');

exports.inicial = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'))
}

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();
  } catch(e) {
    console.log(e);
    return res.sendFile(path.join(__dirname, '../views/HTML/cadastro.html'));
  }
};