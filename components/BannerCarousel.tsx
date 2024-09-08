import { restaurants } from '@/lib/data';
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

export default function BannerCarousel()
{

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {restaurants.map((banner) =>
        <Image key={banner.id} source={{ uri: banner.image }} style={styles.banner} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  banner: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
  },
});
