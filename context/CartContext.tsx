"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([]);


  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  function addToCart(item: CartItem) {
    setCart((prev) => {

      const existing = prev.find(
        (p) => p.id === item.id && p.size === item.size
      );


      if (existing) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? {
                ...p,
                quantity: p.quantity + item.quantity,
              }
            : p
        );
      }


      return [...prev, item];

    });
  }


  function removeFromCart(id: string, size: string) {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size)
      )
    );
  }


  function updateQuantity(
    id: string,
    size: string,
    quantity: number
  ) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: Math.max(1, quantity),
            }
          : item
      )
    );
  }


  function clearCart() {
    setCart([]);
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}