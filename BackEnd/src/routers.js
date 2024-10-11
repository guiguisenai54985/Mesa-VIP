const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //Rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar tds os usuarios
router.get("/api/read/:id", clientController.listByID); // Listar por id
//router.post('/api/cadastro', clientController.createNewUser); //Cadastrar novo usuario
//router.post("/api/validation", clientController.login);//Validar o login
router.post('/api/reset', clientController.getByEmailReset);//verificar o email de reset
router.post('/api/resetPassword', clientController.resetPassword);//resetar a senha
router.post('/api/resetInfo', clientController.resetInfo);//resetar senha
router.post('/api/registerImage', clientController.registerImageProfile);//verificar o email de reset
router.put('/api/registerImage/:id', clientController.updateUser);
router.delete('/api/deletePedido/:id', clientController.deletePedido);//deletar reserva

router.post('/api/cadastroUser' , clientController.cadastroUser)
router.post('/api/vaidarLogin', clientController.login)

module.exports = router;