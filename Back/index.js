const express = require("express");

const cors = require("cors");

const TarefasRouter = require("./routes/tarefas.routes");

const Conn = require("./conn/conn");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/tarefas", TarefasRouter);

Conn();

const port = 3001;

app.listen(port, () => {
  console.log(`O Servidor esta rodando na porta http://${port}`);
});
