import React, { createContext, useContext, useState } from 'react';
import { CartContextType, CartItem } from './useType';


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>
{
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) =>
  {
    setCart((prevCart) =>
    {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem)
      {
        return prevCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateToCart = (id: string, quantity: number) =>
  {
    setCart(
      (prevCart) =>
    {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingItem && quantity > 0)
      {
        return prevCart.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: quantity } : cartItem);
      }
      return prevCart.filter((cartItem) => cartItem.id !== id);
    });
  };

  const removeFromCart = (id: string) =>
  {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
{
  const context = useContext(CartContext);
  if (!context)
  {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
