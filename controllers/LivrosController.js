import { livrosModel } from "../models/livros.js" 

const listarLivros = (req, res) => {
    res.json(livros)
}

const addLivro =  async (req, res) => {
    const {nome, autor, editora} = req.body

    if (!nome || !autor || !editora ) {
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios!' //= adicionar
        })
    }
    
    const livro = new livrosModel({nome, autor, editora})

        try {
            livro.save()  //inserir = adiconar
            return res.json({
                erro: false,
                mensagem: 'Valor adicionado ao banco!',
                livro
            })
        } catch (error) {
            console.log(error)
            return res.json ({
                erro: true,
                mensagem: error
        })
    }
}

const buscarLivros = async (req, res) => {
    try{
        const livros = await livrosModel.find()
        res.jason({
            erro:false,
            livros
        })
    }catch (error) {
        res.jason({
            erro: true,
            mensagem: error
        })
    }
}

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const {nome, autor}= req.body;

    const livro = livros.find((l) => l.id === (id));

    if (!livro){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado!'
        })
    }

    if (!nome || !autor || !editora) {
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios!'
        })
    }

    livro.nome = nome;
    livro.autor = autor;
    livro.editora = editora;

    res.json({
        erro: false,
        mensagem: 'Livro alterado com sucesso!',
        livro
    })
}

const excluirLivro = (req, res) => {
    const {id} = req.params;
    const index = livros.findIndex(() => l.id === (id))

    if(index === -1){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado!'
        })
    }

    livros.splice(index, 1);
    res.json({
        erro: false,
        mensagem: 'Livro deletado com sucesso!'
    })
}

    export {listarLivros, addLivro, buscarLivros, atualizarLivro, excluirLivro}