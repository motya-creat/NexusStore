// src/pages/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../contexts/GameContext';
import { games } from '../gamesData';

const Cart = () => {
  const { cart, removeFromCart, checkout } = useGameContext();
  const navigate = useNavigate();

  const cartGames = cart.map(id => games.find(g => g.id === id)).filter(Boolean);
  const total = cartGames.reduce((sum, g) => sum + g.price, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-message">
        <i className="fas fa-cart-shopping" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
        <h3>Корзина пуста</h3>
        <p>Добавьте игры из магазина, чтобы продолжить.</p>
        <button className="btn" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
          Перейти в магазин
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className="section-title">🛒 Корзина</h1>
      <div className="cart-container">
        {cartGames.map(game => (
          <div key={game.id} className="cart-item">
            <img className="cart-item-img" src={game.img} alt={game.title} />
            <div className="cart-item-info">
              <div className="cart-item-title">{game.title}</div>
              <div className="cart-item-price">{game.price} ₽</div>
            </div>
            <div className="cart-item-actions">
              <button className="btn-danger" onClick={() => removeFromCart(game.id)}>
                <i className="fas fa-trash-alt"></i> Удалить
              </button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <span style={{ fontWeight: 500 }}>Итого к оплате:</span>
          <span className="total-price">{total} ₽</span>
          <button className="btn" onClick={() => { checkout(); navigate('/library'); }}>
            <i className="fas fa-credit-card"></i> Оформить покупку
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;