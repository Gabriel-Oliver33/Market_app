import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/routesParams';
import { updateCompra, getCompras } from '../../../api/api';  // Importando as funções necessárias
import styles from './styles';

// Definindo o tipo para a compra (Purchase)
interface Purchase {
  id: number;
  id_cliente: number;
  data_compra: string;
  total: string; // DECIMAL como string
}

type EditPurchaseModalRouteProp = RouteProp<RootStackParamList, 'EditPurchaseModal'>;

export default function EditPurchaseModal() {
  const route = useRoute<EditPurchaseModalRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const { id } = route.params; // Apenas o ID da compra será passado

  const [clienteId, setClienteId] = useState<number | undefined>(undefined);
  const [total, setTotal] = useState<string>('');

  useEffect(() => {
    // Carregar os dados da compra específica
    const fetchData = async () => {
      try {
        const purchases: Purchase[] = await getCompras(); // Definindo explicitamente o tipo
        const selectedPurchase = purchases.find((item) => item.id === id);

        if (selectedPurchase) {
          setClienteId(selectedPurchase.id_cliente);
          setTotal(selectedPurchase.total);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados da compra', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async () => {
    if (!clienteId || !total) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Chamando a função updateCompra passando clienteId e total
      await updateCompra(id, { cliente_id: clienteId, total: parseFloat(total) });
      navigation.goBack();  // Fecha a tela após a atualização
    } catch (error) {
      console.error('Erro ao atualizar compra:', error);
      alert('Erro ao atualizar compra');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Compra</Text>

      <TextInput
        style={styles.input}
        placeholder="ID do Cliente"
        value={clienteId?.toString()}
        onChangeText={(text) => setClienteId(Number(text))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Preço Total"
        value={total}
        keyboardType="numeric"
        onChangeText={setTotal}
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
