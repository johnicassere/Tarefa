const mongoose = require('mongoose');

const tarefasSchema = new mongoose.Schema({
    titulo:{type:String, required: true},
    descricao:{type:String, required:true},
    prioridade:{type:Number, required: true, min:1, max:3},
    statusTarefa:{type:String, required: true},
    prazo:{type:String, required: true},
})

const TarefasModel = mongoose.model('tarefas', tarefasSchema);

module.exports = TarefasModel;