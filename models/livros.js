import {Schema, model} from 'mongoose';

const livrosSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    }
})

const livrosModel = model('Livros', livrosSchema)

export {livrosModel}