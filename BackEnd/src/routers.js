const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //Rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar tds os usuarios
router.get("/api/read/:id", clientController.listByID); // Listar por id

//router.post('/api/registerImage', clientController.registerImageProfile);//verificar o email de reset

//perfil
router.put('/api/registerImage/:id', clientController.updateUser);

//rotas para login
router.post('/api/cadastrouserhash' , clientController.cadastroUser) //cadastrar usuario
router.post('/api/validatelogin' , clientController.login) //validar login 

//rotas para reset
router.post('/api/reset', clientController.getByEmailReset);//verificar o email de reset
router.post('/api/resetPassword', clientController.resetPassword);//resetar a senha
router.post('/api/resetInfo', clientController.resetInfo);//resetar senha

//rotas para reservas
router.get('/api/reserva', clientController.indexReserva); // Index, mostrar todas as reservas
router.get('/api/reserva/:id', clientController.showReserva); // Show, mostrar reserva específica
router.post('/api/reserva', clientController.createReserva); // Create, criar reserva
router.put('/api/reserva/:id', clientController.updateReserva); // Update, atualizar reserva
router.delete('/api/reserva/:id', clientController.deleteReserva); // Delete, apagar reserva

module.exports = router;