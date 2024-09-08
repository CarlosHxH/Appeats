import { User } from "firebase/auth";

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOutUser: () => Promise<void>;
}

export type CartItem = {
  toFixed(arg0: number): unknown;
  price: number;
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateToCart: (id: string, quantity: number) => void;
};

export interface ItemsType {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

// Tipo de pedido (Order)
export interface OrderType
{
  map: any;
  id: string;
  userId: string;
  items: ItemsType[];
  total: number;
  createdAt: Date;
}

export type Product = {
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  price: number;
  description: string;
  quantity: number;
  category: string;
};