// mock/clients.ts
export interface Cliente {
    id: string;
    nome: string;
    email: string;
    dataNascimento: string;
    status: 'active' | 'inactive'; // Enum para o status
  }
  
  export const clientes: Cliente[] = [
    { id: '1', nome: 'Maria da Silva', email: 'email@email.com', dataNascimento: '14/12/1987', status: 'active' },
    { id: '2', nome: 'João Oliveira', email: 'joao@email.com', dataNascimento: '22/03/1990', status: 'inactive' },
    { id: '3', nome: 'Ana Costa', email: 'ana@email.com', dataNascimento: '01/07/1985', status: 'active' },
  ];
  