const mongoose = require('mongoose');
const User = require('../models/UserModel');
const Tarefa = require('../models/TarefasModel');

module.exports = {

  async update(req, res) {
    // console.log(req.headers);
    const { _id } = req.headers;
    // console.log(_id);
    const before = await Tarefa.findOne({ _id });
    console.log(before);
    mongoose.set('useFindAndModify', false);
    const desc = req.query.description;
    console.log(desc);
    const tarefa = await Tarefa.findOneAndUpdate({ _id }, { description: desc }, {
      returnOriginal: false,
      new: true,
    });
    console.log();
    console.log(tarefa);
    return res.json(tarefa);
  },

  async index(req, res) {
    const { user } = req.headers;
    const tarefas = await Tarefa.find({ user });
    return res.json(tarefas);
  },

  async store(req, res) {
    const {
      description, state,
    } = req.body;

    const { user } = req.headers;

    const userFind = await User.findById(user);
    if (!userFind) {
      return res.status(400).json({ erro: '400' });
    }
    const now = new Date();
    const data = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const tarefa = await Tarefa.create({
      description,
      data,
      state,
      user,
    });

    return res.json(tarefa);
  },
};
