import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function PrivacyPolicy()
{
  const navigation = useNavigation();
  useEffect(() =>
  {
    navigation.setOptions({
      title: 'Termo de Privacidade',
      headerStyle: {
        backgroundColor: '#fff', // Cor de fundo do header
      },
      headerTintColor: 'dark', // Cor do texto e ícones
      headerTitleStyle: {
        fontWeight: 'bold', // Estilo do título
      },
    });
  }, [navigation]);
  return (
    <ThemedView style={{flex:1}}>
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Política de Privacidade</ThemedText>

      <ThemedText style={styles.sectionTitle}>1. Coleta de Informações</ThemedText>
      <ThemedText style={styles.text}>
        Nós coletamos informações que você nos fornece diretamente, como quando você cria uma conta, faz um pedido, ou entra em contato conosco.
        Isso pode incluir seu nome, e-mail, endereço, número de telefone e informações de pagamento.
      </ThemedText>

      <ThemedText style={styles.sectionTitle}>2. Uso das Informações</ThemedText>
      <ThemedText style={styles.text}>
        Utilizamos as informações coletadas para fornecer, manter e melhorar nossos serviços, processar pedidos e enviar comunicações.
      </ThemedText>

      <ThemedText style={styles.sectionTitle}>3. Compartilhamento de Informações</ThemedText>
      <ThemedText style={styles.text}>
        Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para cumprir a lei, proteger nossos direitos,
        ou facilitar o funcionamento de nosso serviço (por exemplo, processadores de pagamento).
      </ThemedText>

      <ThemedText style={styles.sectionTitle}>4. Segurança</ThemedText>
      <ThemedText style={styles.text}>
        Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhuma transmissão pela internet é 100% segura,
        e não podemos garantir a segurança absoluta de suas informações.
      </ThemedText>

      <ThemedText style={styles.sectionTitle}>5. Alterações na Política de Privacidade</ThemedText>
      <ThemedText style={styles.text}>
        Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta política regularmente para se manter informado
        sobre como estamos protegendo suas informações.
      </ThemedText>

      <ThemedText style={styles.sectionTitle}>6. Contato</ThemedText>
      <ThemedText style={styles.text}>
        Se você tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em contato conosco através do e-mail: suporte@example.com.
      </ThemedText>
    </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#777',
    lineHeight: 24,
    marginBottom: 16,
  },
});