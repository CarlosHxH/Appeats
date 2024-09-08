import { Redirect, Stack } from 'expo-router';
import { useSession } from '../ctx';
import { Text } from '@/components/Themed';
import { CartProvider } from '@/lib/CartContext';

export default function AppLayout()
{
  const { session, isLoading } = useSession();
  // Você pode manter a tela Splash aberta ou renderizar uma tela de carregamento como fazemos aqui.
  if (isLoading) return <Text>Loading...</Text>;

  // requer apenas autenticação no layout do grupo (APP) como usuários
  // precisa poder acessar o grupo (auth) e fazer login novamente.
  if (!session) return <Redirect href="/login" />;

  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="address" options={{ presentation: 'modal' }} />
        <Stack.Screen name="cart" options={{ presentation: 'modal' }} />
        <Stack.Screen name="product/[id]" />
      </Stack>
    </CartProvider>
  )
}
