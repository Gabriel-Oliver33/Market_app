const express = require('express');  // Importa o módulo Express
const compraController = require('../controller/compra');  // Importa o controller de compras
const router = express.Router();  // Cria uma nova route Express
module.exports = router; // Exporta a route para ser usado em outros arquivos


// Route GET para obter todas as compras
router.get('/', compraController.getCompras);

// Route POST para criar uma nova compra
router.post('/', compraController.createCompra);

// Route PUT para atualizar uma compra específica, baseada no ID
router.put('/:id', compraController.updateCompra);

// Route DELETE para excluir uma compra específica, baseada no ID
router.delete('/:id', compraController.deleteCompra);


