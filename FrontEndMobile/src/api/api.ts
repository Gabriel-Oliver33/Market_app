import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.56.1:3666', // Ajuste conforme necessário. Se for usar o emulador mobile ou o celular, veja o IPV4 da sua maquina que estará rodando o codigo e substitua pelo indereço ip aqui presente, por exeplo: http://192.168.xx.x:3666
});

// Funções para Clientes
export const getClientes = async () => {
  try {
    const response = await api.get('/clientes');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar clientes:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao buscar clientes');
    }
    console.error('Erro ao buscar clientes:', String(error));
    throw new Error('Erro desconhecido ao buscar clientes');
  }
};

export const createCliente = async (data: { nome: string; email: string; idade: number }) => {
  try {
    const response = await api.post('/clientes', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao criar cliente:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao criar cliente');
    }
    console.error('Erro ao criar cliente:', String(error));
    throw new Error('Erro desconhecido ao criar cliente');
  }
};

export const updateCliente = async (id: number, data: { name: string; email: string; age: number }) => {
  try {
    const response = await api.put(`/clientes/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao atualizar cliente:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao atualizar cliente');
    }
    console.error('Erro ao atualizar cliente:', String(error));
    throw new Error('Erro desconhecido ao atualizar cliente');
  }
};

export const deleteCliente = async (id: number) => {
  try {
    const response = await api.delete(`/clientes/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao deletar cliente:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao deletar cliente');
    }
    console.error('Erro ao deletar cliente:', String(error));
    throw new Error('Erro desconhecido ao deletar cliente');
  }
};

// Funções para Produtos
export const getProdutos = async () => {
  try {
    const response = await api.get('/produtos');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar produtos:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao buscar produtos');
    }
    console.error('Erro ao buscar produtos:', String(error));
    throw new Error('Erro desconhecido ao buscar produtos');
  }
};

export const createProduto = async (data: { nome: string; preco: number }) => {
  try {
    const response = await api.post('/produtos', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao criar produto:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao criar produto');
    }
    console.error('Erro ao criar produto:', String(error));
    throw new Error('Erro desconhecido ao criar produto');
  }
};

export const updateProduto = async (id: number, data: { nome: string; preco: number }) => {
  try {
    const response = await api.put(`/produtos/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao atualizar produto:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao atualizar produto');
    }
    console.error('Erro ao atualizar produto:', String(error));
    throw new Error('Erro desconhecido ao atualizar produto');
  }
};

export const deleteProduto = async (id: number) => {
  try {
    const response = await api.delete(`/produtos/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao deletar produto:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao deletar produto');
    }
    console.error('Erro ao deletar produto:', String(error));
    throw new Error('Erro desconhecido ao deletar produto');
  }
};

// Funções para Compras
export const getCompras = async () => {
  try {
    const response = await api.get('/compras');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar compras:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao buscar compras');
    }
    console.error('Erro ao buscar compras:', String(error));
    throw new Error('Erro desconhecido ao buscar compras');
  }
};

export const createCompra = async (data: { cliente_id: number; total: number }) => {
  try {
    const response = await api.post('/compras', data);  // Passando apenas cliente_id e total
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao criar compra:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao criar compra');
    }
    console.error('Erro ao criar compra:', String(error));
    throw new Error('Erro desconhecido ao criar compra');
  }
};

export const updateCompra = async (id: number, data: { cliente_id: number; produto_id: number; quantidade: number; total: number }) => {
  try {
    const response = await api.put(`/compras/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao atualizar compra:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao atualizar compra');
    }
    console.error('Erro ao atualizar compra:', String(error));
    throw new Error('Erro desconhecido ao atualizar compra');
  }
};

export const deleteCompra = async (id: number) => {
  try {
    const response = await api.delete(`/compras/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao deletar compra:', error.message);
      throw new Error(error.response?.data?.message || 'Erro desconhecido ao deletar compra');
    }
    console.error('Erro ao deletar compra:', String(error));
    throw new Error('Erro desconhecido ao deletar compra');
  }
};
