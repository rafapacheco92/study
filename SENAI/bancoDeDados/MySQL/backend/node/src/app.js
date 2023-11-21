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
    const sql = 'SELECT * FROM cliente WHERE idCliente = ?'
    conexao.query(sql, id, (erro, result) => {
        if(erro){
            console.log('erro')
        } else {
            res.json(result)
        }
    })
})

export default app