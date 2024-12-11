import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import { clientes, Cliente } from '../../../mock/clients';
import styles from './styles';

export default function EditClientScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { id } = route.params as { id: string }; // Obtém o ID do cliente
  const cliente = clientes.find((c) => c.id === id) as Cliente; // Busca o cliente pelo ID

  const [nome, setNome] = useState(cliente.nome);
  const [email, setEmail] = useState(cliente.email);
  const [dataNascimento, setDataNascimento] = useState(cliente.dataNascimento);

  const handleSave = () => {
    // Atualize o cliente no mock (ou API se estiver integrada)
    const index = clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      clientes[index] = { ...clientes[index], nome, email, dataNascimento };
    }
    navigation.goBack(); // Fecha o modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Cliente</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="Data de Nascimento"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
