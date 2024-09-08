import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

type FoodItemProps = {
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  price: number | string | any;
};

export default function FoodItem({ id, name, restaurant, imageUrl, rating, price }: FoodItemProps)
{
  const router = useRouter();
  const handlePress = () =>router.push(`/product/${id}`);

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.restaurant}>{restaurant}</Text>
        <View style={styles.container}>
          <Text style={[styles.rating,{fontWeight:600,color:'#000'}]}>R$ {price.toFixed(2)}</Text>
          <Text style={[styles.rating,{marginLeft:'auto'}]}>⭐ {rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
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
    width: 110,
    height: 110,
  },
  info: {
    flex: 1,
    padding: 6,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurant: {
    color: '#777',
    marginTop: 4,
  },
  rating: {
    marginTop: 6,
    color: '#777',
  },
});
