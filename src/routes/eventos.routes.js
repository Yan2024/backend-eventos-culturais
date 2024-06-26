const { Router } = require("express");
const Autenticacao = require("../middlewares/Autenticacao");
const EventosController = require("../controllers/EventosController");

const eventosRoutes = Router();

const eventosController = new EventosController();
eventosRoutes.use(Autenticacao);

eventosRoutes.get("/", eventosController.listarEventos);
eventosRoutes.get("/filtrar", eventosController.filtrarEventos);
eventosRoutes.post("/", eventosController.criarEvento);
eventosRoutes.put("/:id", eventosController.atualizarEvento);
eventosRoutes.delete("/:id", eventosController.deletarEvento);


module.exports = eventosRoutes; 