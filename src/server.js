const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'notebook', preco: 123.45})
})