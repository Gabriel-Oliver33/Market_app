import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import { updateCliente, getClientes } from '../../../api/api';
import styles from './styles';

type EditClientModalRouteProp = RouteProp<RootStackParamList, 'EditClientModal'>;

interface Cliente {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

export default function EditClientModal() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<EditClientModalRouteProp>();
  const { id } = route.params; // ID do cliente a ser editado

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [idade, setIdade] = useState<string>(''); // Como string para trabalhar com o TextInput
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clients: Cliente[] = await getClientes();
        const client = clients.find((c: Cliente) => c.id === id);
        if (client) {
          setNome(client.nome);
          setEmail(client.email);
          setIdade(client.idade.toString());
        } else {
          setError('Cliente não encontrado');
        }
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os dados do cliente');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleSave = async () => {
    if (!nome || !email || !idade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const parsedIdade = parseInt(idade, 10);
    if (isNaN(parsedIdade) || parsedIdade <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma idade válida');
      return;
    }

    if (Number(idade) < 18) {
      Alert.alert('Erro', 'Você precisa ter 18 anos ou mais.');
      return;
    }
    
    try {
      const updatedClient = { nome, email, idade: parsedIdade };
      console.log('Dados enviados para o backend:', updatedClient);

      await updateCliente(id, updatedClient);
      Alert.alert('Sucesso', 'Cliente atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o cliente');
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

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
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Idade"
        keyboardType="numeric"
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
