import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import SearchBar from '@/components/SearchBar';
import BannerCarousel from '@/components/BannerCarousel';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import { ThemedView } from '@/components/ThemedView';
import { productData, ProductType } from '@/lib/data';

export default function Home()
{

  const [products, setProducts] = useState<ProductType[]>(productData);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() =>
  {
    setRefreshing(true);
    setTimeout(() =>
    {
      setProducts(productData);
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => { setProducts(productData); }, []);

  const filteredData = products.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemedView style={{ flex: 1 }}>
      {/*<Header />*/}
      <SearchBar placeholder={"Buscar..."} value={searchQuery} onChangeText={setSearchQuery} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <BannerCarousel />
        <CategoryList handler={setSearchQuery}/>
        <ProductList products={filteredData} />
      </ScrollView>
    </ThemedView>
  );
}
