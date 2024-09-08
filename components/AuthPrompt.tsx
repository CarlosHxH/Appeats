// app/AuthPrompt.tsx
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useSession } from '@/app/ctx';

const AuthPrompt: React.FC = () =>
{

  const { signOut } = useSession()

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>Bem-vindo de volta!</ThemedText>
      <ThemedText type='subtitle' style={styles.subtitle}>Você não está logado.</ThemedText>
      <ThemedText type='default' style={styles.description}>Por favor, faça login ou registre-se para continuar.</ThemedText>

      <ThemedView style={{ padding: 20 }}>
        <ThemedText type='link'><Link href={'/PrivacyPolicy'}>privacy-policy </Link></ThemedText>
        <ThemedText type='link'><Link href={'/TermsOfService'}>terms-of-service</Link></ThemedText>
      </ThemedView>

      <Pressable style={styles.btn} onPress={()=>signOut()}>
          <ThemedText style={{ color: '#000', marginHorizontal: 'auto', fontSize: 18 }}>Sair</ThemedText>
        </Pressable>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },
  subtitle: {
    marginTop: 12,
    opacity: .7,
  },
  description: {
    opacity: .6,
    marginBottom: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    shadowColor: '#777',
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderRadius: 20,
    margin: 10,
  },
});

export default AuthPrompt;
