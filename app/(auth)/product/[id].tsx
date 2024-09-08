import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { Link, useGlobalSearchParams, useNavigation } from 'expo-router';
import { useCart } from '@/lib/CartContext';
import { productData } from '@/lib/data';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProductDetails()
{

  const { id } = useGlobalSearchParams();
  const navigation = useNavigation();
  const { addToCart, cart } = useCart();

  const product = productData.find((p) => p.id === id);

  useEffect(() =>
  {
    if (product) navigation.setOptions({title: product.name});
  }, [navigation, product]);


  const handleAddToCart = () =>
  {
    if (product)
    {
      addToCart(product as any);
      Alert.alert('Produto adicionado ao carrinho!');
    }
  };

  if (!product)
  {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.error}>Produto não encontrado!</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <ThemedView style={styles.info}>
          <ThemedText style={styles.name}>{product.name}</ThemedText>
          <ThemedText style={styles.restaurant}>{product.restaurant}</ThemedText>
          <View style={styles.row}  >
            <ThemedText style={styles.rating}>R$ {product.price.toFixed(2)}</ThemedText>
            <ThemedText style={styles.rating}>⭐ {product.rating.toFixed(1)}</ThemedText>
          </View>
          <ThemedText style={styles.description}>{product.description}</ThemedText>
          <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
        </ThemedView>
      </ScrollView>
      {cart.length > 0 && (
        <Link href="/cart" style={styles.cartButton}>
          <ThemedText style={styles.cartButtonText}>Ver Sacola ({cart.length})</ThemedText>
        </Link>
      )}
    </ThemedView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
  },
  scrollView: {
    paddingBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  info: {
    marginTop: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  restaurant: {
    fontSize: 18,
    marginTop: 4,
  },
  rating: {
    fontSize: 18,
    marginTop: 4,
  },
  description: {
    marginTop: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
  },
  cartButtonText: {
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});