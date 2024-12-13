import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { createProduto } from '../../../api/api'; // Importando a função para criar produto

export default function NewProductScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const salvarProduto = async () => {
    // Validação simples dos campos
    if (!nome.trim() || !preco.trim()) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const precoConvertido = parseFloat(preco);
    if (isNaN(precoConvertido) || precoConvertido <= 0) {
      Alert.alert('Erro', 'O preço deve ser um número positivo.');
      return;
    }

    try {
      const novoProduto = {
        nome: nome.trim(),
        preco: precoConvertido, // Passando como number
      };

      await createProduto(novoProduto); // Chamando a função da API para criar o produto

      Alert.alert('Sucesso', 'Produto criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao criar produto:', error.message);
        Alert.alert('Erro', `Não foi possível salvar o produto: ${error.message}`);
      } else {
        console.error('Erro desconhecido ao criar produto:', error);
        Alert.alert('Erro', 'Erro desconhecido ao salvar o produto.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Novo Produto</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={salvarProduto}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
