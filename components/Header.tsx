import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter();

  const handlePress = () => {};//router.push(`/cart`);

  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={24} color="black" />
      <Text style={styles.locationText}>Aberto</Text>
      <Pressable onPress={handlePress} style={styles.container}>
        <Ionicons name="cart-outline" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  locationText: {
    fontSize: 16,
  },
});
