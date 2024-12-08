import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { buy, Purchase } from '../../../mock/puchase';
import { RootStackParamList } from '../../../navigation/routesParams';

export default function PuchaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderPurchase = ({ item }: { item: Purchase }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.productName}>Produto: {item.productName}</Text>
        <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
        <Text style={styles.totalPrice}>Total: R$ {item.totalPrice.toFixed(2)}</Text>
        <Text style={styles.date}>Data: {item.date}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inactivateButton]}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Compras</Text>
      <FlatList
        data={buy}
        keyExtractor={(item) => item.id}
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
