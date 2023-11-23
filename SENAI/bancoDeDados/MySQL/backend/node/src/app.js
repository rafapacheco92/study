import express from 'express';
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

// create routes

app.get('/clients', (req, res) => {
    const sql = 'SELECT * FROM cliente'
    conexao.query(sql, (erro, result) => {
        if(erro){
            console.log('erro')
        } else {
            res.json(result)
        }
    })
})

//consulta por id

app.get('/clients/:id', (req, res) => {
    const id = req.params.id
    const cliente - req.body
    const sql = 'SELECT * FROM cliente WHERE idCliente=?'
    conexao.query(sql, id, (erro, result) => {
        if(erro){
            console.log('erro')
        } else {
            res.json(result)
        }
    })
})

//deletar

app.delete('/clients/:id', (req, res) => {
    const id = req.params.id
    const sql = 'DELETE * FROM cliente WHERE idCliente=?'
    conexao.query(sql, id, (erro, result) => {
        if(erro){
            console.log('erro')
        } else {
            res.json(result)
        }
    })
})

//update

app.put('/clients/:id', (req, res) => {
    const id = req.params.id
    const client = req.body
    const sql = 'UPDATE cliente SET ? WHERE idCliente=?'
    conexao.query(sql, [cliente,id], (erro, result) => {
        if(erro){
            console.log('erro')
        } else {
            res.json(result)
        }
    })
})

export default app