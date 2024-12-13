import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../navigation/routesParams';
import { getProdutos } from '../../../api/api';

interface Product {
  id: number;
  nome: string;
  preco: string;  // Alterado para string, pois DECIMAL geralmente é representado como string
}

export default function ProductsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [produtos, setProdutos] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };
    fetchProdutos();
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.price}>R$ {parseFloat(item.preco).toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditProductsModal', { id: item.id })}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inactivateButton]}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
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
