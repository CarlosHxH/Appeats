// MyOrdersScreen.tsx
import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// Tipo para um item do pedido
interface OrderItem
{
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

// Tipo para um pedido
interface Order
{
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  createdAt: Date;
}

const MyOrdersScreen: React.FC = () =>
{
  const [orders, setOrders] = useState<Order[]>([]);

  const renderOrderItem = ({ item }: { item: Order }) => (
    <SafeAreaView style={styles.orderItem}>
      <Text style={styles.orderTitle}>Pedido ID: {item.id.substring(0, 4)}</Text>
      <FlatList
        data={item.items}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>
            {item.quantity}x {item.name} - ${item.price}
          </Text>
        )}
        keyExtractor={(item) => item.productId}
      />
      <Text style={styles.orderTotal}>Total: ${item.total}</Text>
      <Text style={styles.orderDate}>Data: {item.createdAt.toLocaleDateString()}</Text>
    </SafeAreaView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='default' style={styles.title}>Meus Pedidos</ThemedText>
      {false && <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
      />}
    </ThemedView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    paddingTop:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderItem: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#777',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    marginVertical: 4,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  orderDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
