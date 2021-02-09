const User = require('../models/UserModel');

module.exports = {

  async login(req, res) {
    const { email, password } = req.body;
    const valida = await User.findOne({ email });
    if (valida) {
      if (valida.password === password) {
        return res.json({ status: true, id: valida._id });
      }
      return res.json({ status: false, msg: 'senha inválida' });
    } return res.json({ status: false, msg: 'usuário não cadastrado' });
  },

  async store(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        password,
      });
    }
    return res.json(user);
  },
};
