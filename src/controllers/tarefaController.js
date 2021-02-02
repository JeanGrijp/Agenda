const User = require('../models/UserModel');
const Tarefa = require('../models/TarefasModel');

module.exports = {

  async update(req, res) {
    // console.log(req.headers);
    const { id } = req.headers;
    const { description } = req.headers;
    console.log();
    // console.log(req.headers);
    const tarefa = await Tarefa.findOneAndUpdate(id, description, {
      returnOriginal: false,
      new: true,
    });
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
