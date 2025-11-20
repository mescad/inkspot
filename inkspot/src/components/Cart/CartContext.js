import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const [notificationId, setNotificationId] = useState(0);

  const addItem = useCallback((product) => {
    if (!product || !product.id) {
      return;
    }

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          description: product.description || "",
          image: product.image || "",
          category: product.category || "",
          quantity: product.quantity || 1,
        },
      ];
    });
  }, []);

  const incrementItem = useCallback((productId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decrementItem = useCallback((productId) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const showNotification = useCallback((message) => {
    setNotificationId((prev) => {
      const nextId = prev + 1;
      setNotification({ id: nextId, message });
      setTimeout(() => {
        setNotification((prevNotification) =>
          prevNotification && prevNotification.id === nextId ? null : prevNotification
        );
      }, 3000);
      return nextId;
    });
  }, []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
      itemCount,
      showNotification,
      notification,
    }),
    [items, addItem, incrementItem, decrementItem, removeItem, clearCart, itemCount, showNotification, notification]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

