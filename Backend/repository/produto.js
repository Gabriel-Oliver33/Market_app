const pool = require('../database');  // Importando a conexão com o banco de dados

// Criar Produto
exports.createProduto = async (data) => {
    const { nome, preco } = data;
    // Query para inserir um novo produto na tabela 'produtos'
    const query = "INSERT INTO produtos (nome, preco) VALUES (?, ?)";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [nome, preco]);  // Usando execute sem .promise()
    return result;  // Retorna o resultado da operação (o produto criado)
};

// Atualizar Produto
exports.updateProduto = async (id, data) => {
    const { nome, preco } = data;
    // Query para atualizar as informações de um produto existente
    const query = "UPDATE produtos SET nome = ?, preco = ? WHERE id = ?";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [nome, preco, id]);  // Usando execute sem .promise()
    return result;  // Retorna o resultado da operação (o produto atualizado)
};

// Deletar Produto
exports.deleteProduto = async (id) => {
    // Query para excluir um produto da tabela 'produtos'
    const query = "DELETE FROM produtos WHERE id = ?";
    // Usando o método 'execute' para executar a query com o id do produto a ser excluído
    const [result] = await pool.execute(query, [id]);  // Usando execute sem .promise()
    return result;  // Retorna o resultado da operação (o produto excluído)
};

// Obter Produtos
exports.getProdutos = async () => {
    // Query para selecionar todos os produtos da tabela 'produtos'
    const query = "SELECT * FROM produtos";
    try {
        // Usando o método 'execute' para executar a query e obter os resultados
        const [produtos] = await pool.execute(query);  // Usando execute sem .promise()
        return produtos;  // Retorna todos os produtos encontrados
    } catch (error) {
        console.error("Erro ao obter produtos:", error);  // Log de erro caso ocorra
        throw error;  // Repassa o erro para o controller para tratamento
    }
};
