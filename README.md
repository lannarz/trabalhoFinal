Descrição do projeto:
Meu trabalho é uma API para o gerencimento de livros (de uma biblioteca, por exemplo) e nele é possível inserir, listar, buscar, atualizar e excluir livros em um banco de dados (utilizei o MongoDB).

Instruções para rodar a aplicação:
Abra o terminal e digite o comando "npm i -y", depois execute o servidor através do comando "npm start" e verifique se no Insomnia (ou app que estiver utilizando) está rodando na porta "http://localhost:3333/livros/" 

Explicação das rotas disponíveis e exemplos de requisições: ----->
router.get('/', listarLivros): Get na url http://localhost:3333/livros/ lista todos os livros;----->
router.post('/', addLivro): Post na url http://localhost:3333/livros/ { "nome": "Mentirosos", "autor": "Element. Lockhart", "editora": "Seguinte"} adiciona um livro;----->
router.get('/:id', buscarLivroId): Get na url http://localhost:3333/livros/67a369ed1b1b997e3fca4bc9 busca um livro pelo seu ID;----->
router.put('/:id', atualizarLivro): Put na url http://localhost:3333/livros/67a369ed1b1b997e3fca4bc9 { "nome": "Mentirosos Atualizados"} atualiza um livro pelo seu ID;----->
router.delete('/:id', excluirLivro): Delete na url http://localhost:3333/livros/67a369ed1b1b997e3fca4bc9 exclui um livro pelo seu ID
