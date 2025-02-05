import express from 'express';
import { addLivro, atualizarLivro, buscarLivros, excluirLivro, listarLivros } from '../controllers/LivrosController.js';
const router = express.Router();


router.get('/', listarLivros);
router.post('/', addLivro); // sinonimo de criar
router.get('/:id', buscarLivros);
router.put('/:id', atualizarLivro);
router.delete('/:id', excluirLivro);

export {router}