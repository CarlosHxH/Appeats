import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type CheckoutItemProps = {
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  quantity: number;
  price: number;
};

export default function CheckoutItem({ id, name, restaurant, imageUrl, rating, quantity, price }: CheckoutItemProps)
{
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.restaurant}>{restaurant}</Text>
        <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
        <View style={styles.container}>
          <Text style={styles.quantity}>Quantidade: {quantity}</Text>
          <Text style={styles.quantity}>R$ {price.toFixed(2)}</Text>
        </View>
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
  quantity: {
    marginTop: 8,
    color: '#777',
  },
});
