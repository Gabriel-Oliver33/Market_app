const clienteRepository = require('../repository/cliente');  // Importa o repositório de clientes para interagir com o banco de dados

// Função para criar um novo cliente
exports.createCliente = async (data) => {
    return clienteRepository.createCliente(data);  // Chama a função do repositório para criar o cliente no banco
};

// Função para atualizar um cliente existente
exports.updateCliente = async (id, data) => {
    return clienteRepository.updateCliente(id, data);  // Chama a função do repositório para atualizar o cliente com o ID fornecido
};

// Função para excluir um cliente
exports.deleteCliente = async (id) => {
    return clienteRepository.deleteCliente(id);  // Chama a função do repositório para excluir o cliente com o ID fornecido
};

// Função para obter todos os clientes
exports.getClientes = async () => {
    return clienteRepository.getClientes();  // Chama a função do repositório para obter todos os clientes do banco
}; 