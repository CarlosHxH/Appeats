import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '@/lib/CartContext';

export default function SubTotal() {
  const { cart } = useCart();

  const calculateSubTotal = () => {
    return cart.reduce((total:any, item:any) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const subTotal = calculateSubTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subtotal:</Text>
      <Text style={styles.value}>
        R$ {subTotal.toFixed(2).replace('.', ',')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347',
  },
});
