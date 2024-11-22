const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //Rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar tds os usuarios
router.get("/api/read/:id", clientController.listByID); // Listar por id

//perfil
router.put('/api/updateinfo/:id', clientController.updateUser);

//rotas para login
router.post('/api/cadastrouserhash' , clientController.cadastroUser) //cadastrar usuario
router.post('/api/validatelogin' , clientController.login) //validar login 

//rotas para reset
router.post('/api/reset', clientController.getByEmailReset);//verificar o email de reset
router.put('/api/resetPassword', clientController.resetPassword);//resetar a senha
router.post('/api/resetInfo', clientController.resetInfo);//resetar senha

//rotas para reservas
router.get('/api/reserva', clientController.indexReserva); // Index, mostrar todas as reservas
router.get('/api/reserva/:id', clientController.showReserva); // Show, mostrar reserva específica
router.post('/api/criarReserva', clientController.createReserva); // Create, criar reserva
router.put('/api/atualizarReserva/:id', clientController.updateReserva); // Update, atualizar reserva
router.delete('/api/deletarReserva/:id', clientController.deleteReserva); // Delete, apagar reserva
//rotas para horario
router.get('api/horario', clientController.indexhorario); //mostrar todos os horarios
router.get('api/horario/:id', clientController.showHorario); // mostrar horario específico
router.post('api/criarHorario', clientController.createHorario); // criar horario
router.put('api/atualizarHorario', clientController.updateHorario); // atualizar horario
router.delete('api/deleteHorario', clientController.updateHorario); // deletar horario

module.exports = router;