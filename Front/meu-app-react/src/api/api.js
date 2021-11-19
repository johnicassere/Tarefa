const Api = {
    apiUrl: 'hhtp://localhost:3001/tarefas',
    fetchGetAll:() => fetch(Api.apiUrl),
    fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
    fetchPost:(data) => {
        return fetch(`{$Api.apiUrl}/add`,{
          method: 'POST',
          body:JSON.stringify(data),
          headers: new Headers({
              "Content-type" : "application/json"
          })  
        })
    }
}

export default Api;