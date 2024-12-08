export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    status: 'active' | 'inactive';
  }
  
  export const products: Product[] = [
    { id: '1', name: 'Notebook', brand: 'Dell', price: 4500.99, quantity: 10, status: 'active' },
    { id: '2', name: 'Smartphone', brand: 'Apple', price: 7000.00, quantity: 5, status: 'active' },
    { id: '3', name: 'TV', brand: 'Samsung', price: 3200.50, quantity: 2, status: 'inactive' },
  ];
  