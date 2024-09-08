import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function TermsOfService()
{
  const navigation = useNavigation();
  useEffect(() =>
  {
    navigation.setOptions({
      title: 'Termo de Serviço',
      headerStyle: {
        backgroundColor: '#fff', // Cor de fundo do header
      },
      headerTintColor: 'dark', // Cor do ThemedTexto e ícones
      headerTitleStyle: {
        fontWeight: 'bold', // Estilo do título
      },
    });
  }, [navigation]);
  return (
    <ThemedView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <ThemedText style={styles.title}>Termos de Serviço</ThemedText>

        <ThemedText style={styles.sectionTitle}>1. Aceitação dos Termos</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Ao acessar e usar este aplicativo, você concorda em cumprir e ser regido por estes Termos de Serviço e todas as leis e regulamentos aplicáveis.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>2. Uso do Serviço</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. Você não deve usar o serviço para qualquer atividade que
          viole qualquer lei ou regulamento.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>3. Conta do Usuário</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Para acessar alguns recursos do serviço, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade da sua conta e senha.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>4. Política de Privacidade</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Sua privacidade é importante para nós. Por favor, leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>5. Alterações nos Termos</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>6. Limitação de Responsabilidade</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Em nenhuma circunstância seremos responsáveis por quaisquer danos decorrentes do uso ou incapacidade de usar o serviço.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>7. Lei Aplicável</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Estes Termos de Serviço serão regidos e interpretados de acordo com as leis do país em que você reside.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>8. Contato</ThemedText>
        <ThemedText style={styles.ThemedText}>
          Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco através do e-mail: suporte@example.com.
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
  ThemedText: {
    fontSize: 16,
    color: '#777',
    lineHeight: 24,
    marginBottom: 16,
  },
});