const { json } = require("express");
const clientController = require("../model/model");

const userController = {
    //Route root
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //Controller para listar todos os usuarios de banco
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (erro) {
            res.status(400).json({ error: "Erro ao obter a lista de usuarios" })
        }
    },

    //Controller listar por id
    listByID: async (req, res) => {
        try {
            const sql = await clientController.getByIDUser(req.params.id);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este ID" })
            }
        }
        catch (error) {
            return error
        }
    },

    login: async (req, res) => {
        let { email, senha } = req.body;

        try {
            const sql = await clientController.validateLogin(email, senha);


            if (sql.length > 0 && sql[0].senha === senha) {
                res.status(200).json(sql[0]);

            }

            else {
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        }
        catch (error) {
            if (error) {
                console.log(error)
                res.status(400).json({ error });
            }
        }
    },

    getByEmailReset: async (req, res) => {
        let { email } = req.body

        email = email.toLowerCase();

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(200).json({ msg: 'sucesso' })
            }
            else {
                res.status(401).json({ msg: 'email não cadastrado no bd' });
            }
        }
        catch (error) {
            if (error) {
                res.status(400).json({ error });
            }
        }
    },

    resetPassword: async (req, res) => {
        let { email, senha } = req.body

        email = email.toLowerCase();

        try {
            await clientController.updatedPassword(email, senha);
            res.status(200).json({ msg: 'senha atualizada com sucesso' });
        }
        catch (error) {
            console.log('erro ao redefinir a senha')
            res.status(400).json({ msg: 'erro no servidor' })
        }
    },

    resetInfo: async (req, res) => {
        let { nome, sobrenome, email, id } = req.body

        email = email.toLowerCase();

        try {
            await clientController.updateInfo(nome, sobrenome, email, id);
            res.status(200).json({ msg: 'senha atualizada com sucesso' });
        }
        catch (error) {
            console.log('erro ao redfinir a senha')
            res.status(400).json({ msg: 'erro no servidor' })
        }
    },

    // registerImageProfile: async (req, res) => {
    //     try {
    //         let { id, imagemBase64 } = req.body;

    //         console.log(req.body)

    //         await clientController.registerImage(id, imagemBase64);
    //         res.status(201).json({ msg: 'Foto de perfil alterada com sucesso' });

    //     } catch (error) {
    //         console.error('Erro ao registrar a imagem', error);
    //         return res.status(400).json({ msg: 'Erro no servidor' })
    //     }
    // },

    updateUser: async (req, res) => {
        const { id } = req.body;
        try {
            const sql = await clientController.getByID(id)

            if (sql.length > 0) {
                await clientController.updateUser(id)
                res.status(200).json({ msg: "Atualizado com sucesso" })
            }
            else {
                res.status(401).json({ msg: "O id nao existe na base de dados" })
            }
        }
        catch (erro) {
            if (erro) {
                res.status(400).json({ msg: "Erro no servidor" + erro })
            }
        }
    },

    // deletePedido: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         await clientController.removePedido(id);
    //         res.status(200).json({ msg: "Reserva cancelada com sucesso" });
    //     } catch (error) {
    //         console.error('Erro ao cancelar a reserva:', error);
    //         res.status(400).json({ error: "Erro ao cancelar a reserva" });
    //     }
    // },

    cadastroUser: async(req, res) => {
        const {id, nome, sobrenome, email, senha} = req.body

        try{
            const sql = await  clientController.getByEmail(email);

            if(sql.length > 0){
                res.status(401).json({msg: 'O email já está cadastrado na base de dados, insira um email diferente'})
            }
            else{
                await clientController.registerUser(id, nome, sobrenome, email, senha);
                res.status(201).json({msg: ' Usuário cadastrado com sucesso'});
            }
        }
        catch(error){
            console.log(error);
            res.status(400).json({msg:'Ocorreu um erro durante o registro do usuário'});
        }
    },

    login: async(req,res) => {
        let{email, senha} = req.body;

        try{
            const sql = await clientController.validateLogin(email, senha);
            console.log(sql);
            if(sql != null){
                res.status(201).json({msg: 'Usuário válidado com sucesso'});
            }
            else{
                res.status(401).json({msg: 'credenciais inválidas'})
            }
        }
        catch(error){
            if(error){
                res.status(500).json(error);
            }
        }
    },

    // CRUD - Reserva
    indexReserva: async (req, res) => {
        try {
            const reservas = await clientController.indexReserva();
            return res.status(200).json(reservas);
        } catch(error) {
            console.log(error);
            return res.status(400).json({ error })
        }
    },

    showReserva: async (req, res) => {
        const id = req.params.id
        try {
            const [reservas] = await clientController.showReserva(id);
            if (!reservas) {
                throw new Error('Nenhuma reserva encontrada nesse id.');
            }
            return res.status(200).json(reservas);
        } catch(error) {
            console.log(error);
            return res.status(400).json({ error })
        }
    },

    createReserva: async (req, res) => {
        const { telefone, n_pessoas, hora, data_reserva, id_restaurante, id_user } = req.body;
        try {
            await clientController.createReserva({telefone, n_pessoas, hora, data_reserva, id_restaurante, id_user});
            return res.status(201).json({ msg: 'Cadastrado com sucesso' });
        } catch(error) {
            console.log(error);
            return res.status(400).json({ error })
        }
    },

    updateReserva: async (req, res) => {
        const { telefone, n_pessoas, hora, data_reserva } = req.body;
        const id = req.params.id;
        try {
            const reserva = await clientController.updateReserva({telefone, n_pessoas, hora, data_reserva, id});
            return res.status(201).json(reserva);
        } catch(error) {
            console.log(error);
            return res.status(400).json({ error })
        }
    },

    deleteReserva: async (req, res) => {
        const id = req.params.id;
        try {
            await clientController.deleteReserva(id);
            return res.status(204).json({ msg: 'Reserva excluida com sucesso' });
        } catch(error) {
            console.log(error);
            return res.status(400).json({ error })
        }
    },

};

module.exports = userController;