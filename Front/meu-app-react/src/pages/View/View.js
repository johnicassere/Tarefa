import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Api from '../../api/api';

const View = () =>{
    const [tarefa, setTarefa] = useState({});

    useEffect(() =>{
        getTarefaById();
    }, [])

    const { id } = useParams()
    console.log(id);

    const getTarefaById = async () => {
        const request = await Api.fetchGetById(id);
        const tarefa = await request.json();
        setTarefa(tarefa);

    }

    return(
        <div className="container">
          <div className="row my-5">
            
            <div className="col-6">
              <div className="card my-5">
                <h1 className="text-center my-4"><b>Tarefa: </b>{tarefa.titulo}</h1>
                <h3 className="text-center"><b>Descrição: </b>{tarefa.descricao}</h3>
                <h4 className="text-center"><b>Prioridade: </b> {tarefa.prioridade}</h4>
                <h5 className="text-center"><b>Status da tarefa: </b>{tarefa.statusTarefa}</h5>
                <h6 className="text-center"><b>Prazo: </b>{tarefa.prazo}</h6>
                <div className="btn-group mt-3 w-100">
                  <Link to={`/edit/${tarefa._id}`} className="btn btn-info">Editar</Link>
                  <button className="btn btn-danger">Excluir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default View