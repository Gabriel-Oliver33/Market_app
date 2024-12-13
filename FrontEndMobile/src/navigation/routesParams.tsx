export type RootStackParamList = {
    ClientScreen: undefined;
    NewClientScreen: undefined;
    ProductsScreen: undefined;
    NewProductScreen: undefined;
    PuchaseScreen: undefined;
    NewPurchaseScreen: undefined;
    EditClientModal: { id: number }; // Parâmetro: ID do cliente
    EditProductsModal: { id: number }; // Parâmetro: ID do produto
    EditPurchaseModal: { id: number };  // Parâmetro: ID da compra
  };
  