const connection = require("../config/db");
const bcrypt = require('bcrypt');
const salt = 10;

const useModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM user")
            .catch(erro => console.log(erro));
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

    //inicio da model do usuario
    
    //email para resetar senha 
    resetByEmail: async (email) => {
        const [result] = await connection.query('select * from user where email=?', [email])
        return result;
    },

    //model para atualizar asinformaçõs do usuario
    updateInfo: async (nome, sobrenome, email, id) => {
        const result = await connection.query('update user set nome=?, sobrenome=?, email=? where id=?', [nome, sobrenome, email, id])
            .catch(erro => console.log(erro));
        return result;
    },

    updateUser: async(id)=>{
        const[result] = await connection.query("UPDATE user WHERE id=?",[id])
        .catch(erro => console.log(erro));
        return result;
    },
    
    //atualizar a senha
    updatedPassword: async (email, senha) => {
        const hashPassword = await bcrypt.hash(senha,salt);
        const result = await connection.query('UPDATE user SET senha=? where email=?', [hashPassword, email])
            .catch(erro => console.log(erro));
        return result;
    },

    //cadastrar usuario
    registerUser: async(id, nome, sobrenome, email, senha) => {
        const handPassword = await bcrypt.hash(senha,salt)
        const [result] = await connection.query("INSERT INTO user values(?, ?, ?, ?, ?)", [id, nome, sobrenome, email, handPassword])
        .catch(erro => console.log(erro));
        return result
    },

    //validar login
    validateLogin: async(email, senha) => {
        
        const [result] = await connection.query("SELECT `id`, `nome`, `sobrenome`, `email`, `senha` FROM user WHERE email=?" , [email])
        try{
            if(result.length > 0){
               
                const userSenha = result[0];
            
                const validate = await bcrypt.compare(senha, userSenha.senha);
                
                if(validate){
                    return result
                }
                else{
                    return null
                }
            }
            else{
                return null
            }
        }
        catch(erro){
            console.log(erro)
        }
    },
    //fim da model do login

    //model para reserva
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