import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existing = cartItems.find(i => i.title === item.title);
    if (existing) {
      const updated = cartItems.map(i =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(title) {
    setCartItems(cartItems.filter(item => item.title !== title));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
