const clienteService = require('../service/cliente');
const moment = require('moment');
const pool = require('../database');

// Validação de email único
const emailExists = async (email) => {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);
    return rows.length > 0;
};

// Validação de idade
const isAdult = (dataNascimento) => {
    const idade = moment().diff(moment(dataNascimento, 'YYYY-MM-DD'), 'years');
    return idade >= 18;
};

// Criar Cliente
exports.createCliente = async (req, res) => {
    const { nome, email, dataNascimento } = req.body;

    // Validação de email único
    if (await emailExists(email)) {
        return res.status(400).json({ message: 'Email já registrado' });
    }

    // Validação de idade
    if (!isAdult(dataNascimento)) {
        return res.status(400).json({ message: 'Você precisa ter 18 anos ou mais' });
    }

    try {
        const cliente = await clienteService.createCliente(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar cliente", error });
    }
};

// Atualizar Cliente
exports.updateCliente = async (req, res) => {
    const { nome, email, dataNascimento } = req.body;
    const clienteId = req.params.id;

    // Validação de email único (excluindo o próprio cliente)
    if (await emailExists(email)) {
        return res.status(400).json({ message: 'Email já registrado' });
    }

    // Validação de idade
    if (!isAdult(dataNascimento)) {
        return res.status(400).json({ message: 'Você precisa ter 18 anos ou mais' });
    }

    try {
        const cliente = await clienteService.updateCliente(clienteId, req.body);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar cliente", error });
    }
};

// Excluir Cliente
exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await clienteService.deleteCliente(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        res.status(200).json({ message: "Cliente excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir cliente", error });
    }
};

// Obter Clientes
exports.getClientes = async (req, res) => {
    try {
        const clientes = await clienteService.getClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter clientes", error });
    }
};
