import { Product } from '../mock/products';
import { Purchase } from '../mock/purchase';

export type RootStackParamList = {
    ClientScreen: undefined;
    NewClientScreen: undefined;
    ProductsScreen: undefined;
    NewProductScreen: undefined;
    PuchaseScreen: undefined;
    EditClientModal: { id: number }; // Parâmetro: ID do cliente
    EditProductsModal: { product: Product }; // Produto passado como parâmetro
    EditPurchaseModal: { purchase: Purchase };  // Purchase passado como parâmetro
  };
  