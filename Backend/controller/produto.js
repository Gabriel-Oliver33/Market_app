const produtoService = require('../service/produto');

// Criar Produto
exports.createProduto = async (req, res) => {
    try {
        // Tenta criar o produto com os dados enviados na requisição
        const produto = await produtoService.createProduto(req.body);
        // Retorna o produto criado com status 201 (Criado)
        res.status(201).json(produto);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao criar produto:", error);
        res.status(500).json({ message: "Erro ao criar produto", error });
    }
};

// Atualizar Produto
exports.updateProduto = async (req, res) => {
    try {
        // Tenta atualizar o produto com o ID da URL e os dados enviados na requisição
        const produto = await produtoService.updateProduto(req.params.id, req.body);
        // Se o produto não for encontrado, retorna erro 404
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        // Retorna o produto atualizado com status 200 (OK)
        res.status(200).json(produto);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao atualizar produto:", error);
        res.status(500).json({ message: "Erro ao atualizar produto", error });
    }
};

// Excluir Produto
exports.deleteProduto = async (req, res) => {
    try {
        // Tenta excluir o produto com o ID da URL
        const produto = await produtoService.deleteProduto(req.params.id);
        // Se o produto não for encontrado, retorna erro 404
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        // Retorna uma mensagem de sucesso ao excluir o produto
        res.status(200).json({ message: "Produto excluído com sucesso" });
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao excluir produto:", error);
        res.status(500).json({ message: "Erro ao excluir produto", error });
    }
};

// Obter Produtos
exports.getProdutos = async (req, res) => {
    try {
        // Tenta obter todos os produtos
        const produtos = await produtoService.getProdutos();
        // Retorna todos os produtos encontrados com status 200 (OK)
        res.status(200).json(produtos);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao obter produtos:", error);
        res.status(500).json({ message: "Erro ao obter produtos", error });
    }
};
