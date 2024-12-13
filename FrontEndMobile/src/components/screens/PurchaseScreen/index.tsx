import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../navigation/routesParams';
import { getCompras } from '../../../api/api';

interface Purchase {
  id: number;
  id_cliente: number;
  data_compra: string;
  total: string;  // DECIMAL como string
}

export default function PurchaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [purchases, setPurchases] = useState<Purchase[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data = await getCompras();
        setPurchases(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar compras');
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  const renderPurchase = ({ item }: { item: Purchase }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.productName}>Cliente ID: {item.id_cliente}</Text>
        <Text style={styles.date}>Data: {item.data_compra}</Text>
        <Text style={styles.totalPrice}>Total: R$ {parseFloat(item.total).toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditPurchaseModal', { id: item.id })}>
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
      <Text style={styles.header}>Lista de Compras</Text>
      <FlatList
        data={purchases}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPurchase}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => console.log('Adicionar Compra')}>
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
