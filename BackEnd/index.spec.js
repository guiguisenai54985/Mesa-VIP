// const request = require('supertest')
// const express = require('express')
// const bodyParser = require ('body-parser')
// const routers = require ('./src/routers')
// const client = require('./config/db')
// const { updateUser } = require('./Models/models')

// const app = express();
// app.use(bodyParser.json());
// app.use (routers);

// let server;

// //função para realizar a chamada do servidor
// beforeAll(()=>{
//     server = app.listen(8086)
// });

// // função para fechar conexão com o banco e encerrar o servidor
// afterAll(async()=>{
//     await client.end();
//     server.close();
// })

// describe('API Routers',()=>{
//     //rota raiz
//     it('GET / deve retornar a mensagem', async()=>{
//         const res = await request (app).get('/');
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toHaveProperty( 'message', "The API is running, welcome my Server!!!");
//     });

//     //rota para listar users
//     it('GET /api/read deve retornar uma lista de usuários', async()=>{
//         const res = await request (app).get('/api/read');
//         console.log(res.text);//imprime os objetos que vem do banco
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toBeInstanceOf(Array);
//     });

//     //listar usuarios por id
//     it('GET /api/read/:id deve retornar um usuários por id', async()=>{
//         const res = await request (app).get('/api/read/1');
//         if(res.statusCode === 200){
//             expect(res.body).toBeInstanceOf(Array);
//             expect(res.body.length).toBeGreaterThan(0);
//         }
//         else{
//             expect(res.statusCode).toEqual(401);
//             expect(res.body).toHaveProperty('msg', "Não existe registro no banco com este id");
//         }
//     });

//     //teste de rota para cadastrar um usuario
//     it('POST /api/register dev criar um novo usuário', async()=>{
//         const data = {
//             nome: "Ana Carolina",
//             sobrenome: "de Col",
//             idade: "18"
//         };

//         const res =await request(app).post('/api/register').send(data);
//         if(res.statusCode === 201){
//             expect(res.body).toHaveProperty('msg', "Usuário cadastrado com sucesso")
//         }
//         else{
//             expect(res.statusCode).toEqual(401);
//             expect(res.body).toHaveProperty('msg', "O ID já está cadastrado na base de dados")
//         }
//     });

//     //teste de rota para deletar um usuario no banco
//     it('DELETE /api/delete/:id deve deletar um usuário por id', async()=>{
//         const id = 1;
//         const res =await request(app).delete(`/api/delete/${id}`);
        
//         if(res.statusCode === 204){
//             expect(res.body).toEqual({});
//         }
//         else{
//             expect(res.statusCode).toEqual(404);
//             expect(res.body).toHaveProperty('msg', `O ID ${id} não existe na base de dados`)
//         }
//     });

//     //rota para atualizar as informações do usuario
//     it('Put /api/update/:id deve atualizar as informações do usuário', async()=>{
//         const id = 2;

//         const updateUser = {
//             nome: "Guilherme",
//             sobrenome: "Pelassa Marini Eduardo",
//             idade: "18"
//         };

//         const res =await request(app).put(`/api/update/${id}`).send(updateUser);
//         if(res.statusCode === 200){
//             expect(res.body).toHaveProperty('msg', "Dados atualizados com sucesso!!!")
//         }
//         else{
//             expect(res.statusCode).toEqual(401);
//             expect(res.body).toHaveProperty('msg', `O ID ${id} na base de dados`)
//         }
//     })
// })