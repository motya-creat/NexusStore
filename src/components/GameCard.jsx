import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../contexts/GameContext';

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const { addToCart, isInLibrary, isInCart } = useGameContext();
  const owned = isInLibrary(game.id);
  const inCart = isInCart(game.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(game.id);
  };

  return (
    <div className="game-card" onClick={() => navigate(`/game/${game.id}`)}>
      <img className="game-img" src={game.img} alt={game.title} />
      <div className="game-info">
        <div className="game-title">{game.title}</div>
        <div className="game-price">{game.price} ₽</div>
        <div className="game-actions">
          {!owned && !inCart && (
            <button className="btn" onClick={handleAddToCart}>
              <i className="fas fa-cart-plus"></i> В корзину
            </button>
          )}
          {inCart && !owned && (
            <span className="btn" style={{ background: '#4b5563', cursor: 'default' }}>
              <i className="fas fa-check"></i> В корзине
            </span>
          )}
          {owned && (
            <span style={{ background: '#10b981', padding: '0.3rem 1rem', borderRadius: '40px', fontSize: '0.8rem' }}>
              <i className="fas fa-check-circle"></i> В библиотеке
            </span>
          )}
          <button className="btn-detail" onClick={(e) => { e.stopPropagation(); navigate(`/game/${game.id}`); }}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;