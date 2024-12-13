import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../navigation/routesParams';
import { getCompras, getClientes, deleteCompra } from '../../../api/api';

interface Purchase {
  id: number;
  id_cliente: number;
  data_compra: string;
  total: string; // DECIMAL como string
}

interface Cliente {
  id: number;
  nome: string;
}

export default function PurchaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [purchases, setPurchases] = useState<Purchase[] | null>(null);
  const [clientes, setClientes] = useState<Cliente[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [comprasData, clientesData] = await Promise.all([getCompras(), getClientes()]);
        setPurchases(comprasData);
        setClientes(clientesData);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getClienteNome = (id_cliente: number): string => {
    const cliente = clientes?.find((cliente) => cliente.id === id_cliente);
    return cliente ? cliente.nome : 'Cliente não encontrado';
  };

  const handleDeleteCompra = async (id: number) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza de que deseja excluir esta compra?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              await deleteCompra(id); // Chama a função de exclusão
              setPurchases((prevPurchases) => prevPurchases?.filter((purchase) => purchase.id !== id) || []);
              Alert.alert('Sucesso', 'Compra excluída com sucesso!');
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir a compra.');
            }
          },
        },
      ],
    );
  };

  const renderPurchase = ({ item }: { item: Purchase }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.productName}>Cliente: {getClienteNome(item.id_cliente)}</Text>
        <Text style={styles.date}>Data: {item.data_compra}</Text>
        <Text style={styles.totalPrice}>Total: R$ {parseFloat(item.total).toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditPurchaseModal', { id: item.id })}  // Passando apenas o id
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.inactivateButton]}
          onPress={() => handleDeleteCompra(item.id)}
        >
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
        onPress={() => navigation.navigate('NewPurchaseScreen')}
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
