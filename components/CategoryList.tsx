import React from 'react';
import { ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { categories } from "@/lib/data"

export default function CategoryList({handler}:any) {
  //const handler = (e:any)=>onClick(e);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <Pressable key={index} style={styles.category} onPress={()=>handler(category)}>
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginVertical: 8,
  },
  category: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
