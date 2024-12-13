import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { createCompra } from '../../../api/api'; // Importando a função para criar compra

export default function NewPurchaseScreen() {
  const navigation = useNavigation();

  const [clienteId, setClienteId] = useState('');
  const [total, setTotal] = useState('');

  const salvarCompra = async () => {
    // Validação simples dos campos
    if (!clienteId.trim() || !total.trim()) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const totalConvertido = parseFloat(total);
    if (isNaN(totalConvertido) || totalConvertido <= 0) {
      Alert.alert('Erro', 'O total deve ser um número positivo.');
      return;
    }

    try {
      const novaCompra = {
        cliente_id: parseInt(clienteId.trim(), 10), // Convertendo o cliente_id para número
        total: totalConvertido, // Passando como number
      };

      await createCompra(novaCompra); // Chamando a função da API para criar a compra

      Alert.alert('Sucesso', 'Compra criada com sucesso!');
      navigation.goBack(); // Volta para a tela anterior
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao criar compra:', error.message);
        Alert.alert('Erro', `Não foi possível salvar a compra: ${error.message}`);
      } else {
        console.error('Erro desconhecido ao criar compra:', error);
        Alert.alert('Erro', 'Erro desconhecido ao salvar a compra.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nova Compra</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="ID do Cliente"
          value={clienteId}
          onChangeText={setClienteId}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Total"
          value={total}
          onChangeText={setTotal}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={salvarCompra}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
