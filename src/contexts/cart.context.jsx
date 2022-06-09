import { createContext, useState, useEffect } from "react";

const addCardItem = (cardItems, productToAdd) => {
  const existingCartItem = cardItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cardItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};
const removeCardItem = (cardItems, cartItemToRemove) => {
  const existingCartItem = cardItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cardItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cardItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cardItems, cartItemToRemove) => {
  return cardItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  calculateCartTotalAmount: () => {},
  cartCount: 0,
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    setTotalAmount(totalAmount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCardItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCardItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    cartCount,
    clearItemFromCart,
    totalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
