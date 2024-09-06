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

    registerUser: async (id, nome, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?)", [id, nome, email, senha])
            .catch(err => console.log(erro));
        return result
    },
    
    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result;
    },
   
    //email para resetar senha 
    resetByEmail: async (email) => {
        const [result] = await connection.query('SELECT * FROM usuario WHERE email=?', [email])
        return result;
    },

    //update the password
    updatedPassword: async (email, senha) => {
        const result = await connection.query('UPDATE usuario SET senha=? where email=?', [senha, email])
            .catch(erro => console.log(erro));
        return result;
    },

    sintoma: async (id, nome, frequencia) => {
        const result = await connection.query("INSERT INTO sintomas values(?,?,?)", [id,nome, frequencia])
            .catch(erro => console.log(erro));
        return result;

    },
};

module.exports = useModel;