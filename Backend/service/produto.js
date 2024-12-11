const produtoRepository = require('../repository/produto');  // Importa o repository de produtos para interagir com o banco de dados

// Função para criar um novo produto
exports.createProduto = async (data) => {
    return produtoRepository.createProduto(data);  // Chama a função do repository para criar o produto no banco
};

// Função para obter todos os produtos
exports.getProdutos = async () => {
    return produtoRepository.getProdutos();  // Chama a função do repository para obter todos os produtos do banco
};

// Função para atualizar um produto existente
exports.updateProduto = async (id, data) => {
    return produtoRepository.updateProduto(id, data);  // Chama a função do repository para atualizar o produto com o ID fornecido
};

// Função para excluir um produto
exports.deleteProduto = async (id) => {
    return produtoRepository.deleteProduto(id);  // Chama a função do repository para excluir o produto com o ID fornecido
};


