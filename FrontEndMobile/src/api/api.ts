import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3666', // Altere se necessário
});

// Cliente
export const getClientes = async () => {
  try {
    const response = await api.get('/clientes');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao buscar clientes.');
  }
};

export const createCliente = async (cliente: {
  nome: string;
  email: string;
  dataNascimento: string;
}) => {
  try {
    const response = await api.post('/clientes', cliente);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao criar cliente.');
  }
};

export const updateCliente = async (
id: number,
cliente: {
  nome: string;
  email: string;
  dataNascimento: string;
}
) => {
  try {
    const response = await api.put(`/clientes/${id}`, cliente);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao atualizar cliente.');
  }
};

export const deleteCliente = async (id: number) => {
  try {
    const response = await api.delete(`/clientes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao excluir cliente.');
  }
};

export default api;
