const express = require('express');  // Importa o módulo Express
const produtoController = require('../controller/produto');  // Importa o controller de produtos
const router = express.Router();  // Cria uma nova route Express
module.exports = router;// Exporta a route para ser usado em outros arquivos

// Route GET para obter todos os produtos
router.get('/', produtoController.getProdutos);

// Route POST para criar um novo produto
router.post('/', produtoController.createProduto);

// Route PUT para atualizar um produto específico, baseado no ID
router.put('/:id', produtoController.updateProduto);

// Route DELETE para excluir um produto específico, baseado no ID
router.delete('/:id', produtoController.deleteProduto);


