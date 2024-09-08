import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar(props: TextInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#999" />
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    margin: 16,
  },
  input: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
});


//{ value='', onChangeText=()=>{}, placeholder = "Buscar..."}: SearchBarProps
/*
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
*/
/*
type SearchBarProps = {
  value: string | any | undefined;
  onChangeText: (text: string) => void | any | undefined;
  placeholder?: string | any | undefined;
};
*/