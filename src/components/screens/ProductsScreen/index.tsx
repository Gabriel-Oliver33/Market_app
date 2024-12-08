import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { products, Product } from '../../../mock/products';
import { RootStackParamList } from '../../../navigation/routesParams';

export default function ProductsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inactivateButton]}>
          <Text style={styles.buttonText}>Inativar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NewProductScreen')} // Navegação para a tela de novo produto
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('ClientScreen')}>
          <Text style={styles.navItem}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PuchaseScreen')}>
        <Text style={styles.navItem}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductsScreen')}>
          <Text style={styles.navItem}>Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
