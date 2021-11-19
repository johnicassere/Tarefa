import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

const Edit = () =>{
    const { id } = useParams();
    const [tarefa, setTarefa] = useState({});

    useEffect(() =>{
        getTarefaById();
    }, [])

    const getTarefaById = async() =>{
        const request = await Api.fetchGetById(id);
        const tarefa = await request.json();
        setTarefa(tarefa);
    };
    const handleFieldsChange = (evento) =>{
        const campos = { ... tarefa}
        campos[evento.target.titulo] = evento.target.value;
        setTarefa(campos);
    }

    return(
        <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Editar Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Nome da Tarefa:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Nome da Tarefa"
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
                    name="titulo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Nome do autor"
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    placeholder="Prioridadde da Tarefa"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="statusTarefa">Status da Tarefa:</label>
                  <input
                    id="statusTarefa"
                    type="text"
                    value={tarefa.statusTarefa}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="URL da capa do album"
                    name="statusTarefa"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo da Tarefa:</label>
                  <input
                    id="prazo"
                    type="date"
                    value={tarefa.prazo}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Prazo da Tarefa"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Editar
                </button>
                <button type="button" className="btn btn-danger">
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Edit