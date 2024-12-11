const express = require('express');  // Importa o módulo Express
const clienteController = require('../controller/cliente');  // Importa o controller de clientes
const router = express.Router();  // Cria uma nova route Express
module.exports = router; // Exporta o roteador para ser usado em outros arquivos

// Route GET para obter todos os clientes
router.get('/', clienteController.getClientes);

// Route POST para criar um novo cliente
router.post('/', clienteController.createCliente);

// Route PUT para atualizar as informações de um cliente específico, baseado no ID
router.put('/:id', clienteController.updateCliente);

// Route DELETE para excluir um cliente específico, baseado no ID
router.delete('/:id', clienteController.deleteCliente);


