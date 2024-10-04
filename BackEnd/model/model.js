const connection = require("../config/db");
const npm bcrypt = require('bcrypt');
const salt= 10;

const useModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM usuario")
            .catch(err => console.log(erro));
        return result
    },

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result;
    },

    getByIDUser: async (id) => {
        const [result] = await connection.query("SELECT * FROM usuarios WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, sobrenome, email, senha, imagem ) => {
        try{
            const result = await connection.query('INSERT INTO usuarios (id,nome,sobrenome,email,senha,imagem) VALUES(?,?,?,?,?,?)',[id,nome,sobrenome,email,senha,imagem])
            return result;
        }
        catch(error) {
            console.log('Erro ao registrar o usuário com a imagem', error);
            throw new Error('Erro ao registrar o usuário')
        }
    },
    
    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result;
    },
   
    //email para resetar senha 
    resetByEmail: async (email) => {
        const [result] = await connection.query('select * from usuarios where email=?', [email])
        return result;
    },

    updateInfo: async (nome, sobrenome, email, id) => {
        const result = await connection.query('update usuarios set nome=?, sobrenome=?, email=? where id=?', [nome, sobrenome, email, id])
            .catch(erro => console.log(erro));
        return result;
    },

    updateUser: async(id, imagem)=>{
        const[result] = await connection.query("UPDATE usuarios SET imagem =?, WHERE id=?",[imagem, id])
        .catch(erro => console.log(erro));
        return result;
    },

    registerImage: async (id, imagem ) => {
        try{
            const result = await connection.query('UPDATE usuarios set imagem=? WHERE id=?',[imagem, id])
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
        const result = await connection.query('UPDATE usuario SET senha=? where email=?', [senha, email])
            .catch(erro => console.log(erro));
        return result;
    },

};

module.exports = useModel;