import express from 'express'
import { router } from './routes/livrosRoutes.js'
import mongoose from 'mongoose'
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/livros').then(() => {
    console.log('Conectado ao MongoDB')
}).catch ( err => {
    console.erro('Erro ao conectar ao MongoDB: ', err)
})


app.use('/livros', router)
app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})  lll