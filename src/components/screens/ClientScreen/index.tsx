import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import do tipo necessário
import styles from './styles';
import { RootStackParamList } from '../../../navigation/routesParams'; // Import correto do tipo de rotas

interface Cliente {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
}

const clientes: Cliente[] = [
  { id: '1', nome: 'Maria da Silva', email: 'email@email.com', dataNascimento: '14/12/1987' },
  { id: '2', nome: 'João Oliveira', email: 'joao@email.com', dataNascimento: '22/03/1990' },
  { id: '3', nome: 'Ana Costa', email: 'ana@email.com', dataNascimento: '01/07/1985' },
];

export default function ClientScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Adicione o tipo aqui

  const renderCliente = ({ item }: { item: Cliente }) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.birthdate}>{item.dataNascimento}</Text>
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
      <Text style={styles.header}>Lista de clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={renderCliente}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NewClientScreen')} // Agora funciona
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Clientes</Text>
        <Text style={styles.navItem}>Compras</Text>
        <Text style={styles.navItem}>Produtos</Text>
      </View>
    </View>
  );
}
