import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import Colors from "@/constants/Colors";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


export default function TabLayout()
{
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Desative a renderização estática do cabeçalho na web
        // Para evitar um erro de hidratação na navegação react v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerLeft: () => (
            <Link href="/address" asChild>
              <Pressable>
                {({ pressed }) => (
                  <TabBarIcon name={pressed?'location':'location-outline'}  style={{padding:10}}/>
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable>
                {({ pressed }) => (
                  <TabBarIcon name={pressed ? 'cart' : 'cart-outline'} style={{padding:10}} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: '',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: '',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: '',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />),
        }}
      />
    </Tabs>
  );
}
