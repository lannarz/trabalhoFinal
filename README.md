Descrição do projeto:
Meu trabalho é uma API para o gerencimento de livros (de uma biblioteca, por exemplo) e nele é possível inserir, listar, buscar, atualizar e excluir livros em um banco de dados (utilizei o MongoDB).

Instruções para rodar a aplicação:
Abra o terminal e digite o comando "npm i -y", depois execute o servidor através do comando "npm start" e por fim verifique se o MongoDB está rodando na porta "mongosh:localhost:27017" 

Explicação das rotas disponíveis e exemplos de requisições:
router.get('/', listarLivros): lista todos os livros
router.post('/', addLivro): adiciona um livro
router.get('/:id', buscarLivroId): busca um livro pelo seu ID
router.put('/:id', atualizarLivro): atualiza um livro
router.delete('/:id', excluirLivro): exclui um livro
