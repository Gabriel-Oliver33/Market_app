import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ClientScreen from '../components/screens/ClientScreen';
import NewClientScreen from '../components/screens/NewClientScreen';
import ProductsScreen from '../components/screens/ProductsScreen'
import NewProductScreen from '../components/screens/NewProductScreen'
import PuchaseScreen from '../components/screens/PurchaseScreen';
import EditClientModal from '../components/screens/EditClientModal';
import EditProductsModal from '../components/screens/EditProductsModal';
import EditPurchaseModal from '../components/screens/EditPurchaseModal';
import NewPurchaseScreen from '../components/screens/NewPurchaseScreen'
import { RootStackParamList } from './routesParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ClientScreen">
        <Stack.Screen
          name="ClientScreen"
          component={ClientScreen}
          options={{ headerTitle: 'Clientes',
            headerBackVisible: false, // Garante que a seta de voltar não seja visível
            headerStyle: {
              backgroundColor: '#f4511e',  // Cor de fundo do cabeçalho
            },
          }}
        />
        <Stack.Screen
          name="NewClientScreen"
          component={NewClientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{ headerTitle: 'Produtos',
          headerBackVisible: false, // Garante que a seta de voltar não seja visível
          headerStyle: {
            backgroundColor: '#f4511e',  // Cor de fundo do cabeçalho
          },
          }}
        />
        <Stack.Screen 
          name="NewProductScreen" 
          component={NewProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NewPurchaseScreen" 
          component={NewPurchaseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PuchaseScreen" 
          component={PuchaseScreen}
          options={{ headerTitle: 'Compras',
          headerBackVisible: false, // Garante que a seta de voltar não seja visível
          headerStyle: {
            backgroundColor: '#f4511e',  // Cor de fundo do cabeçalho
          },
          }}
        />
        <Stack.Screen 
          name="EditClientModal" 
          component={EditClientModal} 
          options={{ presentation: 'modal', headerShown: false }} // Define como modal
        />
        <Stack.Screen 
          name="EditProductsModal" 
          component={EditProductsModal}
          options={{ presentation: 'modal', headerShown: false }} // Define como modal
        />
        <Stack.Screen
          name="EditPurchaseModal"
          component={EditPurchaseModal}
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
