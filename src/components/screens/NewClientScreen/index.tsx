import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function NewClientScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const salvarCliente = () => {
    // Lógica para salvar o cliente
    console.log({ nome, email, dataNascimento });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>&larr;</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Novo cliente</Text>
      <View style={styles.inputArea}>
        <TextInput
            style={styles.input}
            placeholder="Maria da Silva"
            value={nome}
            onChangeText={setNome}
        />
        <TextInput
            style={styles.input}
            placeholder="example@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="10/10/1990"
            value={dataNascimento}
            onChangeText={setDataNascimento}
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