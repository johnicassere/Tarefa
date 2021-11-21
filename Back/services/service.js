const TarefasModel = require("./../models/tarefas");

class tarefasService {
  findAll = async () => await TarefasModel.find();

  findById = async (id) => {
    return await TarefasModel.findById(id);
  };

  create = async (tarefa) => {
    return await TarefasModel.create(tarefa);
  };
  edit = async (id, tarefa) => {
    return await TarefasModel.updateOne({ _id: id }, tarefa);
  };

  delete = async (id) => {
    return await TarefasModel.deleteOne({ _id: id });
  };
}

module.exports = tarefasService;
