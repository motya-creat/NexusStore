// src/pages/GameDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { games } from '../gamesData';
import { useGameContext } from '../contexts/GameContext';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(g => g.id === parseInt(id));
  const { addToCart, isInLibrary, isInCart } = useGameContext();

  if (!game) return <div className="empty-message">Игра не найдена</div>;

  const owned = isInLibrary(game.id);
  const inCart = isInCart(game.id);

  return (
    <>
      <button className="btn-outline" onClick={() => navigate('/')}>
        <i className="fas fa-arrow-left"></i> Назад в магазин
      </button>
      <div className="game-detail">
        <img className="detail-img" src={game.img} alt={game.title} />
        <div className="detail-info">
          <h2>{game.title}</h2>
          <p><strong>Жанр:</strong> {game.genre}</p>
          <p>{game.description}</p>
          <p className="game-price">{game.price} ₽</p>
          <div style={{ marginTop: '1.5rem' }}>
            {!owned && !inCart && (
              <button className="btn" onClick={() => { addToCart(game.id); navigate('/cart'); }}>
                <i className="fas fa-cart-plus"></i> Купить сейчас
              </button>
            )}
            {inCart && !owned && (
              <span className="btn" style={{ background: '#4b5563', cursor: 'default' }}>
                <i className="fas fa-check"></i> Уже в корзине
              </span>
            )}
            {owned && (
              <span className="btn" style={{ background: '#10b981', cursor: 'default' }}>
                <i className="fas fa-check-circle"></i> В вашей библиотеке
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;