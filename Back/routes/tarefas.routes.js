const express = require("express");

const TarefasController = require("./../controllers/tarefas.controller");

const tarefasController = new TarefasController();

const router = express.Router();

router.get("/", tarefasController.getTarefas);

router.get("/:id", tarefasController.getTarefasById);

router.post("/add", tarefasController.createTarefa);

router.put("/:id", tarefasController.editTarefa);

router.delete("/:id", tarefasController.deleteTarefa);

module.exports = router;
