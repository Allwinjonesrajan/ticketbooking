import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart === null ? []: JSON.parse(storedCart) ;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
const clearCart = () => {
  setCart([]); // Clears the cart
  localStorage.removeItem('cart'); // Optionally remove from localStorage too
};

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product passed to addToCart:", product);
      return;
    }

    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

 const removeFromCart = (product) => {
  if (!product || !product.id) {
    console.error("Invalid product passed to removeFromCart:", product);
    return;
  }

  setCart((prevCart) => {
    const exists = prevCart.find((item) => item.id === product.id);

    if (!exists) {
      return prevCart;
    }
    if (exists.quantity === 1) {
      return prevCart.filter((item) => item.id !== product.id);
    }
    return prevCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
};



  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const quantity = item.quantity || 0;
    if (isNaN(price)) {
      console.warn(`Invalid price for item with id ${item.id}`);
      return sum;
    }
    return sum + price * quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
