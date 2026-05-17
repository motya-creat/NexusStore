import React, { createContext, useState, useEffect, useContext } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('keystore_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [library, setLibrary] = useState(() => {
    const saved = localStorage.getItem('keystore_library');
    return saved ? JSON.parse(saved) : [];
  });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('keystore_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('keystore_library', JSON.stringify(library));
  }, [library]);

  const addToCart = (gameId) => {
    if (library.includes(gameId)) return false;
    if (cart.includes(gameId)) return false;
    setCart(prev => [...prev, gameId]);
    return true;
  };

  const removeFromCart = (gameId) => {
    setCart(prev => prev.filter(id => id !== gameId));
  };

  const checkout = () => {
    if (cart.length === 0) return false;
    setLibrary(prev => [...prev, ...cart]);
    setCart([]);
    showNotification('Спасибо за покупку! Игры добавлены в библиотеку.', 'success');
    return true;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const isInCart = (id) => cart.includes(id);
  const isInLibrary = (id) => library.includes(id);

  return (
    <GameContext.Provider value={{
      cart,
      library,
      addToCart,
      removeFromCart,
      checkout,
      isInCart,
      isInLibrary,
      cartCount: cart.length,
      libraryCount: library.length,
      notification,
      showNotification
    }}>
      {children}
    </GameContext.Provider>
  );
};