import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useCart } from '@/lib/CartContext';

type CartItemProps = {
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  quantity: number;
  price: number
};

export default function CartItem({ id, name, restaurant, imageUrl, rating, quantity, price }: CartItemProps)
{
  const { removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.restaurant}>{restaurant}</Text>
        <View style={styles.row}>
          <Text style={styles.quantity}>Quantidade: {quantity}</Text>
          <Text style={styles.price}>R$ {price}</Text>
          <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
        </View>
        <Button title='Remover' onPress={() => removeFromCart(id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurant: {
    color: '#666',
    marginTop: 4,
  },
  rating: {
    marginTop: 8,
    color: '#777',
  },
  price: {
    marginTop: 8,
    color: '#777',
    fontWeight: 'bold',
  },
  quantity: {
    marginTop: 8,
    color: '#777',
  },
});
