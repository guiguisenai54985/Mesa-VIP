const connection = require("../config/db");

const useModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM user")
            .catch(err => console.log(erro));
        return result
    },

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM user WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result;
    },

    getByIDUser: async (id) => {
        const [result] = await connection.query("SELECT * FROM user WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    // registerUser: async (id, nome, sobrenome, email, senha) => {
    //     try{
    //         const result = await connection.query('INSERT INTO user (id,nome,sobrenome,email,senha) VALUES(?, ?, ?, ?, ?)',[id, nome, sobrenome, email, senha])
    //         return result;
    //     }
    //     catch(error) {
    //         console.log('Erro ao registrar o usuário com a imagem', error);
    //         throw new Error('Erro ao registrar o usuário')
    //     }
    // },
    
    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM user WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result;
    },
   
    //email para resetar senha 
    resetByEmail: async (email) => {
        const [result] = await connection.query('select * from user where email=?', [email])
        return result;
    },

    updateInfo: async (nome, sobrenome, email, id) => {
        const result = await connection.query('update user set nome=?, sobrenome=?, email=? where id=?', [nome, sobrenome, email, id])
            .catch(erro => console.log(erro));
        return result;
    },

    updateUser: async(id, imagem)=>{
        const[result] = await connection.query("UPDATE user SET imagem =?, WHERE id=?",[imagem, id])
        .catch(erro => console.log(erro));
        return result;
    },

    registerImage: async (id, imagem ) => {
        try{
            const result = await connection.query('UPDATE user set imagem=? WHERE id=?',[imagem, id])
            return result;
        }
        catch(error) {
            console.log('Erro ao registrar o usuário com a imagem', error);
            throw new Error('Erro ao registrar o usuário')
        }
    },

    removePedido: async (id) => {
        const [result] = await connection.query(
            "DELETE FROM pedido WHERE id = ?",
            [id]
        ).catch(err => console.log(err));
        return result;
    },

    //update the password
    updatedPassword: async (email, senha) => {
        const result = await connection.query('UPDATE user SET senha=? where email=?', [senha, email])
            .catch(erro => console.log(erro));
        return result;
    },

    registerUser: async(id, nome, sobrenome, email, senha) => {
        const [result] = await connection.query("INSERT INTO user values(?, ?, ?, ?, ?)", [id, nome, sobrenome, email, senha])
        .catch(erro => console.log(erro));
        return result
    },

    validateLoginUser: async(email,senha) => {
        const [result] = await connection.query("SELECT * FROM user WHERE email=? AND senha=?" , [email,senha])
        .catch(erro  => console.log(erro));
        return result
    },

    indexReserva: async () => {
        const [result] = await connection.query('SELECT `id`, `telefone`, `n_pessoas`, `hora`, `data_reserva`, `id_restaurante`, `id_user` FROM `reserva`');
        return result;
    },

    showReserva: async (id) => {
        const [result] = await connection.query('SELECT `id`, `telefone`, `n_pessoas`, `hora`, `data_reserva`, `id_restaurante`, `id_user` FROM `reserva` WHERE `id` = ?', [id]);
        return result;
    },

    createReserva: async ({telefone, n_pessoas, hora, data_reserva, id_restaurante, id_user}) => {
        const [result] = await connection.query('INSERT INTO `reserva`(`telefone`, `n_pessoas`, `hora`, `data_reserva`, `id_restaurante`, `id_user`) VALUES (?,?,?,?,?,?)', [telefone, n_pessoas, hora, data_reserva, id_restaurante, id_user]);
        return result;
    },

    updateReserva: async ({telefone, n_pessoas, hora, data_reserva, id}) => {
        const [result] = await connection.query('UPDATE `reserva` SET `telefone`=? ,`n_pessoas`=?,`hora`=?,`data_reserva`=? WHERE `id` = ?;', [telefone, n_pessoas, hora, data_reserva, id]);
        return result;
    },

    deleteReserva: async (id) => {
        const [result] = await connection.query('DELETE FROM `reserva` WHERE `id` = ?', [id]);
        return result;
    },

};

module.exports = useModel;