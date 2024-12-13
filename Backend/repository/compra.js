const pool = require('../database');  // Aqui você importa sua conexão com o banco de dados

// Criar Compra
exports.createCompra = async (data) => {
    const { cliente_id, total } = data;  // Remova data_compra, pois é preenchido automaticamente
    // Query para inserir uma nova compra na tabela 'compras'
    const query = "INSERT INTO compras (id_cliente, total) VALUES (?, ?)";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [cliente_id, total]);  // Não precisa enviar data_compra
    return result;  // Retorna o resultado da operação (a compra criada)
};

// Atualizar Compra
exports.updateCompra = async (id, data) => {
    const { cliente_id, produto_id, quantidade, total } = data;
    // Query para atualizar as informações de uma compra existente
    const query = "UPDATE compras SET cliente_id = ?, produto_id = ?, quantidade = ?, total = ? WHERE id = ?";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [cliente_id, produto_id, quantidade, total, id]);
    return result;  // Retorna o resultado da operação (a compra atualizada)
};

// Excluir Compra
exports.deleteCompra = async (id) => {
    // Query para excluir uma compra da tabela 'compras'
    const query = "DELETE FROM compras WHERE id = ?";
    // Usando o método 'execute' para executar a query com o id da compra a ser excluída
    const [result] = await pool.execute(query, [id]);
    return result;  // Retorna o resultado da operação (a compra excluída)
};

// Obter Compras
exports.getCompras = async () => {
    // Query para selecionar todas as compras da tabela 'compras'
    const query = "SELECT * FROM compras";
    // Usando o método 'execute' para executar a query e obter os resultados
    const [compras] = await pool.execute(query);
    return compras;  // Retorna todas as compras encontradas
};
