import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { createCliente } from '../../../api/api'; // Importando apenas a função necessária

export default function NewClientScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const salvarCliente = async () => {
    // Validação simples dos campos
    if (!nome || !email || !idade) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (isNaN(Number(idade))) {
      Alert.alert('Erro', 'A idade deve ser um número.');
      return;
    }
    
    if (Number(idade) < 18) {
      Alert.alert('Erro', 'Você precisa ter 18 anos ou mais.');
      return;
    }

    try {
      const novoCliente = {
        nome: nome, // Alterado para "name" conforme a função da API
        email,
        idade: parseInt(idade, 10), // Convertendo para número inteiro
      };

      await createCliente(novoCliente); // Chamando a função correta da API

      Alert.alert('Sucesso', 'Cliente criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      Alert.alert('Erro', 'Não foi possível salvar o cliente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Novo cliente</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={salvarCliente}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
