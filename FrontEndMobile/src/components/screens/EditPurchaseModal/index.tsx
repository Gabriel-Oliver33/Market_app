import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams'; // Importando a tipagem correta
import styles from './styles';

// Criando a tipagem para o uso da rota
type EditPurchaseModalRouteProp = RouteProp<RootStackParamList, 'EditPurchaseModal'>;

export default function EditPurchaseModal() {
  const route = useRoute<EditPurchaseModalRouteProp>(); // Usando a tipagem para o useRoute
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const { purchase } = route.params; // Acessando os parâmetros

  const [productName, setProductName] = useState(purchase.productName);
  const [quantity, setQuantity] = useState(purchase.quantity.toString());
  const [totalPrice, setTotalPrice] = useState(purchase.totalPrice.toString());
  const [date, setDate] = useState(purchase.date);

  const handleSave = () => {
    // Salve as alterações aqui ou envie os dados atualizados para a API
    console.log({
      productName,
      quantity: parseInt(quantity, 10),
      totalPrice: parseFloat(totalPrice),
      date,
    });
    navigation.goBack(); // Fecha a modal após salvar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Compra</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        keyboardType="numeric"
        onChangeText={(text) => setQuantity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço Total"
        value={totalPrice}
        keyboardType="numeric"
        onChangeText={(text) => setTotalPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={date}
        onChangeText={setDate}
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
