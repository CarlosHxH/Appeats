import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import SearchBar from '@/components/SearchBar';
import FoodItem from '@/components/FoodItem';
import { ProductType } from '@/lib/data';
import { ThemedView } from '@/components/ThemedView';

export default function Search()
{
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() =>
  {
    setRefreshing(true);
    setTimeout(() => {
      setProducts([])
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() =>{setProducts([])}, []);

  const filteredData = products.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <FoodItem
                key={item.id}
                id={item.id}
                name={item.name}
                restaurant={item.restaurant}
                imageUrl={item.imageUrl}
                rating={item.rating}
                price={item.price}
              />
            ))
          ) : (
            <Text style={styles.noResults}>Nenhum resultado encontrado.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  scrollView: {
    padding: 16,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
    fontSize: 16,
  },
});
