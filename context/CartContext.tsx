"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (
    product: Omit<CartItem, "quantity">
  ) => void;

  removeFromCart: (
    id: string
  ) => void;

  increaseQuantity: (
    id: string
  ) => void;

  decreaseQuantity: (
    id: string
  ) => void;

  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType>({
    cart: [],

    addToCart: () => {},

    removeFromCart: () => {},

    increaseQuantity: () => {},

    decreaseQuantity: () => {},

    clearCart: () => {},
  });

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cart, setCart] =
    useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {

    const storedCart =
      localStorage.getItem("cart");

    if (storedCart) {

      setCart(
        JSON.parse(storedCart)
      );
    }

  }, []);

  // Save cart to localStorage
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // Add To Cart
  const addToCart = (
    product: Omit<
      CartItem,
      "quantity"
    >
  ) => {

    setCart((prev) => {

      const existingItem =
        prev.find(
          (item) =>
            item.id ===
            product.id
        );

      // Increase quantity
      if (existingItem) {

        return prev.map(
          (item) =>

            item.id ===
            product.id

              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }

              : item
        );
      }

      // Add new item
      return [

        ...prev,

        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase Quantity
  const increaseQuantity = (
    id: string
  ) => {

    setCart((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (
    id: string
  ) => {

    setCart((prev) =>

      prev
        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item
        )

        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  // Remove Item
  const removeFromCart = (
    id: string
  ) => {

    setCart((prev) =>

      prev.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  // Clear Entire Cart
  const clearCart = () => {

    setCart([]);
  };

  return (

    <CartContext.Provider
      value={{

        cart,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);