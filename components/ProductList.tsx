import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function ProductList({ products }: { products: any[] })
{

  return (
    <ScrollView style={styles.container}>
      {products.map((product, index) => (
        <View key={index} style={styles.restaurant}>
          <Link href={`/product/${product.id}`}>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>R$ {product.price}</Text>
            </View>
          </Link>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  restaurant: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 4,
    color: '#777',
    fontWeight: 'bold',
  },
});
function useLink(arg0: { pathname: string; })
{
  throw new Error('Function not implemented.');
}

