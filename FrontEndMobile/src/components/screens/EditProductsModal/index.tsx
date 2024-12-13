import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import { updateProduto, getProdutos } from '../../../api/api';

type EditProductsModalRouteProp = RouteProp<RootStackParamList, 'EditProductsModal'>;

interface Product {
  id: number;
  nome: string;
  preco: string; // DECIMAL como string
}

export default function EditProductsModal() {
  const route = useRoute<EditProductsModalRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const { id } = route.params; // Apenas o ID do produto será passado

  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Carregar os dados do produto
    const fetchProduct = async () => {
      try {
        const products: Product[] = await getProdutos(); // Pega todos os produtos
        const product = products.find((item) => item.id === id); // Encontrar o produto pelo ID

        if (product) {
          setName(product.nome);
          setPrice(product.preco);
        } else {
          setError('Produto não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar os dados do produto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSave = async () => {
    if (!name || !price) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    // Validar se o preço é um número válido
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Erro', 'Por favor, insira um preço válido');
      return;
    }

    try {
      // Atualizar o produto no backend
      await updateProduto(id, { nome: name, preco: parsedPrice });
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      navigation.goBack(); // Voltar para a tela anterior após salvar
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o produto');
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
      <Text style={styles.header}>Editar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
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
