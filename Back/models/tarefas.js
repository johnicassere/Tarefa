const mongoose = require("mongoose");

const tarefasSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  statusTarefa: { type: String, required: true },
  prazo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const TarefasModel = mongoose.model("tarefas", tarefasSchema);

module.exports = TarefasModel;
