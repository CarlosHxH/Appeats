// app/UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import AuthPrompt from '@/components/AuthPrompt';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/app/ctx';

const UserProfile: React.FC = () =>
{
  // Aqui você pode armazenar os usuário
  const [userData, setUserData] = useState<any>(null);

  const { signOut } = useSession()

  useEffect(() => { setUserData([]) }, []);

  if (true ?? false) return <AuthPrompt />

  return (
    <ThemedView style={{ flex: 1 }}>
      <View style={styles.profileHeader}>
        <ThemedText type='title' style={styles.profileName}>{userData?.name || ''}</ThemedText>
        <ThemedText type='subtitle' style={styles.profileEmail}>{userData?.email || ''}</ThemedText>
        <ThemedText type='subtitle' style={styles.profileEmail}>{userData?.phoneNumber || ''}</ThemedText>
        <ThemedText type='subtitle' style={styles.profileEmail}>{userData?.address || ''}</ThemedText>
      </View>

      <View style={{ padding: 20 }}>
        <ThemedText type='link'><Link href={'/PrivacyPolicy'}>privacy-policy </Link></ThemedText>
        <ThemedText type='link'><Link href={'/TermsOfService'}>terms-of-service</Link></ThemedText>
      </View>

      <View style={{ marginTop: 'auto' }}>
        <Pressable style={[styles.button, styles.btn]} onPress={()=>signOut()}>
          <ThemedText style={{ color: '#000', marginHorizontal: 'auto', fontSize: 18 }}>Atualizar cadrastro</ThemedText>
        </Pressable>
      </View>
      
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  btn: {
    backgroundColor: '#fff',
    textAlign: 'center',
    //shadowColor: '#777',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  registerButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  orderText: {
    fontSize: 18,
  },
  orderDate: {
    fontSize: 14,
    color: '#999',
  },
  logout: {
    backgroundColor: '#dc3545',
  },
});

export default UserProfile;
