import React, { useState } from 'react';
import { ScrollView, TextInput, Button, Alert, StyleSheet, Linking } from 'react-native';
import { useCart } from '@/lib/CartContext';
import CheckoutItem from '@/components/CheckoutItem';
import { ThemedView } from '@/components/ThemedView';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = () => {
    if (!name || !address || !paymentMethod) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    // Formatação da mensagem do pedido
    const orderDetails = cart.map((item:any) => {
      return `${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    }).join('\n');

    const message = `
      *Pedido de ${name}*\n
      Endereço: ${address}\n
      Método de Pagamento: ${paymentMethod}\n
      Itens:\n
      ${orderDetails}\n
      *Total: R$ ${calculateTotal().toFixed(2).replace('.', ',')}*
    `;

    const phoneNumber = '5565992969922';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim())}`;

    // Abrir o WhatsApp
    Linking.openURL(url).then(() => {
        Alert.alert('Pedido enviado via WhatsApp!');
        clearCart(); // Limpar a sacola após o envio
      })
      .catch((error) => {
        Alert.alert('Erro ao abrir o WhatsApp. Tente novamente.');
        console.error(error);
      });
  };

  const calculateTotal = () => {
    return cart.reduce((total: number, item: any) => {
      return total + item.price * item.quantity as number;
    }, 0);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {cart.map((item) => (
          <CheckoutItem
            key={item.id}
            id={item.id}
            name={item.name}
            restaurant={item.restaurant}
            imageUrl={item.imageUrl}
            rating={item.rating}
            quantity={item.quantity} price={0}          />
        ))}
        
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço de Entrega"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Método de Pagamento"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />
        
        <Button title="Confirmar Pedido" onPress={handleConfirmOrder} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    paddingBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
});
