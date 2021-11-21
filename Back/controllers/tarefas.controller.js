const TarefasService = require("./../services/service");

const tarefasService = new TarefasService();

class TarefasController {
  getTarefas = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.send(tarefas);
  };

  getTarefasById = async (req, res) => {
    const tarefa = await tarefasService.findById(req.params.id);
    res.send(tarefa);
  };

  createTarefa = async (req, res) => {
    const tarefa = req.body;

    await tarefasService
      .create(req.body)
      .then(() => {
        res.send({ message: `Tarefa ${tarefa.titulo} Cadastrado com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: `Erro no servidor` });
      });
  };

  editTarefa = async (req, res) => {
    const idParam = req.params.id;
    const tarefaEdit = req.body;
    await tarefasService
      .edit(idParam, tarefaEdit)
      .then(() => {
        res.send({ message: `Tarefa editada com sucesso` });
      })
      .catch((err) => {
        res.status(500).send({ message: `Erro: $(err) ` });
      });
  };

  deleteTarefa = async (req, res) => {
    const idParam = req.params.id;
    await tarefasService
      .delete(idParam)
      .then(() => {
        res.send({ message: `Excluido com sucesso` });
      })
      .catch((err) => {
        res.status(500).send({ message: `Erro: ${err}` });
      });
  };
}

module.exports = TarefasController;
