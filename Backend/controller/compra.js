const compraService = require('../service/compra');

// Criar Compra
exports.createCompra = async (req, res) => {
    try {
        // Tenta criar a compra com os dados enviados na requisição
        const compra = await compraService.createCompra(req.body);
        // Retorna a compra criada com status 201 (Criado)
        res.status(201).json(compra);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao criar compra", error });
    }
};

// Atualizar Compra
exports.updateCompra = async (req, res) => {
    try {
        // Tenta atualizar a compra com o ID da URL e os dados enviados na requisição
        const compra = await compraService.updateCompra(req.params.id, req.body);
        // Se a compra não for encontrada, retorna erro 404
        if (!compra) {
            return res.status(404).json({ message: "Compra não encontrada" });
        }
        // Retorna a compra atualizada com status 200 (OK)
        res.status(200).json(compra);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao atualizar compra", error });
    }
};

// Excluir Compra
exports.deleteCompra = async (req, res) => {
    try {
        // Tenta excluir a compra com o ID da URL
        const compra = await compraService.deleteCompra(req.params.id);
        // Se a compra não for encontrada, retorna erro 404
        if (!compra) {
            return res.status(404).json({ message: "Compra não encontrada" });
        }
        // Retorna uma mensagem de sucesso ao excluir a compra
        res.status(200).json({ message: "Compra excluída com sucesso" });
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao excluir compra", error });
    }
};

// Obter Compras
exports.getCompras = async (req, res) => {
    try {
        // Tenta obter todas as compras
        const compras = await compraService.getCompras();
        // Retorna a lista de compras com status 200 (OK)
        res.status(200).json(compras);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao obter compras", error });
    }
};
