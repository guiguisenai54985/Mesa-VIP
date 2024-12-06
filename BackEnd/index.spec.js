const request = require('supertest')
const express = require('express')
const bodyParser = require ('body-parser')
const routers = require ('./src/routers.js')
const client = require('./config/db')
const { updateUser } = require('./model/model')

const app = express();
app.use(bodyParser.json());
app.use (routers);

let server;

//função para realizar a chamada do servidor
beforeAll(()=>{
    server = app.listen(8086)
});

// função para fechar conexão com o banco e encerrar o servidor
afterAll(async()=>{
    await client.end();
    server.close();
})

describe('API Routers',()=>{
    //rota raiz
    it('GET / deve retornar a mensagem', async()=>{
        const res = await request (app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty( 'msg', "The API is running!!!");
    });

    //rota para listar users
    it('GET /api/read deve retornar uma lista de usuários', async()=>{
        const res = await request (app).get('/api/read');
        console.log(res.text); //imprime os objetos que vem do banco
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
})