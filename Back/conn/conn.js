const mongoose = require("mongoose");

const Conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/todolist", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexao com Banco executada com sucesso");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Conn;
