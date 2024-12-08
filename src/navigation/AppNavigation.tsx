import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ClientScreen from '../components/screens/ClientScreen';
import NewClientScreen from '../components/screens/NewClientScreen';
import ProductsScreen from '../components/screens/ProductsScreen'
import NewProductScreen from '../components/screens/NewProductScreen'
import PuchaseScreen from '../components/screens/PuchaseScreen';
import { RootStackParamList } from './routesParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ClientScreen">
        <Stack.Screen
            name="ClientScreen"
            component={ClientScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="NewClientScreen"
            component={NewClientScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="NewProductScreen" 
            component={NewProductScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="PuchaseScreen" 
            component={PuchaseScreen}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
