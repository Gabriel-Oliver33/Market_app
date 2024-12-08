export interface Purchase {
    id: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    date: string; // Formato de data: "dd/mm/yyyy"
  }
  
  export const buy: Purchase[] = [
    {
      id: '1',
      productName: 'Arroz 5kg',
      quantity: 2,
      totalPrice: 39.98,
      date: '05/12/2024',
    },
    {
      id: '2',
      productName: 'Feijão Preto 1kg',
      quantity: 5,
      totalPrice: 24.95,
      date: '06/12/2024',
    },
    {
      id: '3',
      productName: 'Óleo de Soja 900ml',
      quantity: 3,
      totalPrice: 14.97,
      date: '07/12/2024',
    },
    {
      id: '4',
      productName: 'Macarrão Espaguete 500g',
      quantity: 4,
      totalPrice: 11.96,
      date: '08/12/2024',
    },
    {
      id: '5',
      productName: 'Açúcar Refinado 1kg',
      quantity: 6,
      totalPrice: 17.94,
      date: '08/12/2024',
    },
  ];
  