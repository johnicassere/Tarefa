import React from "react";
import Api from '../../api/api';
import { useNavigate } from "react-router-dom";

const Cadastro = () =>{
    const navigate = useNavigate();
    const handleSubmit = async (evento) =>{
        evento.preventDefault();
        
        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const statusTarefa = evento.target.statusTarefa.value;
        const prazo = evento.target.prazo.value;

        const tarefa = {
            titulo,
            descricao,
            prioridade,
            statusTarefa,
            prazo
        }

        const request = await Api.fetchPost(tarefa);
        if(request.statusTarefa === 500) {
            alert('Erro No Servidor')
        }
        const result = await request.json();
        if(result.error){
            console.log(result.error);
        }else{
            alert(result.message);
            navigate('/');
        }
    }
    return(
        <div className="container">
                  <div className="card mt-5">
                       <div className="card-title">
                                <div className="row">
                                      <div className="col">
                                          <h3 className="mx-3 my-3 text-center">Cadastro de Tarefas</h3>
                                        </div>
                               </div>
                            </div>
                         <div className="card-body">
                             <form onSubmit={handleSubmit}>
                                <div className="row mb-4">
                                   <div className="col-4">
                                       <div className="form-group">
                                            <label htmlFor="titulo">Nome da Tarefa:</label>
                                            <input id="titulo" className="form-control" type="text" placeholder="Nome da Tarefa" name="titulo"/>
                                        </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="descricao">Descrição:</label>
                      <input id="descricao" type="text" className="form-control" placeholder="Descrição" name="descricao"/>
                    </div>
                  </div>
                  <div className="col-4">
                  <label htmlFor="prioridade">Prioridade:</label>    
                  <select class="form-control">
                        <option>Min</option>
                        <option>Medio</option>
                        <option>Max</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="statusTarefa">Status da Tarefa:</label>
                      <input id="statusTarefa" type="text" className="form-control" placeholder="Status da Tarefa" name="statusTarefa"/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="prazo">Prazo da Tarefa:</label>
                      <input id="prazo" type="date" className="form-control" min="00:00" max="10:00" placeholder="Prazo da Tarefa" name="prazo"/>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-end justify-content-around">
                    <button type="submit" className="btn btn-success">Enviar</button>
                    <button type="button" className="btn btn-danger">Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      )
}

export default Cadastro

