const express = require('express');
const PORT = 3666;  
const app = express();

// Middleware para parsing de JSON, para que o corpo das requisições seja interpretado como JSON
app.use(express.json());

// Importando as routes dos recursos (clientes, produtos, compras)
const clienteRoutes = require('./route/cliente'); 
const produtoRoutes = require('./route/produto');  
const compraRoutes = require('./route/compra');  

// Definindo as routes main da API
app.use('/clientes', clienteRoutes); 
app.use('/produtos', produtoRoutes);  
app.use('/compras', compraRoutes);  

// root da API
app.get('/', (req, res) => {
    res.send('Lojinha Open');
});

// Iniciando o servidor na port definida
app.listen(PORT, () => {
    console.log("Servidor rodando na porta" + PORT);  
});
