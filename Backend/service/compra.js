const compraRepository = require('../repository/compra');  // Importa o repository responsável por interagir com a tabela de compras no banco de dados

// Função para criar uma nova compra
exports.createCompra = async (data) => {
    return compraRepository.createCompra(data);  // Chama o método do repository para adicionar uma nova compra no banco de dados
};

// Função para obter todas as compras registradas
exports.getCompras = async () => {
    return compraRepository.getCompras();  // Chama o método do repository para recuperar todos os registros de compras do banco de dados
};

// Função para atualizar os dados de uma compra existente
exports.updateCompra = async (id, data) => {
    return compraRepository.updateCompra(id, data);  // Chama o método do repository que atualiza as informações de uma compra identificada pelo ID fornecido
};

// Função para excluir uma compra do banco de dados
exports.deleteCompra = async (id) => {
    return compraRepository.deleteCompra(id);  // Chama o método do repository para remover uma compra do banco de dados com base no ID fornecido
};

