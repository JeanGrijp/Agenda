const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  description: String,
  data: String,
  state: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Tarefa', TarefaSchema);
