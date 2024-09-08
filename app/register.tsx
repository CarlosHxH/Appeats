import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useSession } from "./ctx";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Login()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();

  const handleLogin = () =>
  {
    signIn(email, password);
    router.replace("/");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Bem-vindo! </ThemedText>
      <ThemedText style={styles.paragraph}>
        Este é um repo simples que emula um fluxo de trabalho de autenticação de login
        Usando o roteador Expo, focado no aspecto da navegação.
      </ThemedText>
      <ThemedText style={styles.separator} />
      <TextInput onChangeText={setEmail} placeholder="Email" style={styles.input} keyboardType="email-address"/>
      <TextInput onChangeText={setPassword} placeholder="Senha" secureTextEntry style={styles.input} />
      <TextInput onChangeText={setPassword} placeholder="Confirme a senha" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <ThemedView style={{flexDirection:"row"}}>
        <ThemedText>Já possui conta? </ThemedText>
        <ThemedText type="link">
          <Link href={'/login'}>Click aqui</Link>
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
});
