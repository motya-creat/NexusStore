import React from 'react';
import { useGameContext } from '../contexts/GameContext';
import { games } from '../gamesData';
import { Link } from 'react-router-dom';

const Library = () => {
  const { library } = useGameContext();
  const ownedGames = library.map(id => games.find(g => g.id === id)).filter(Boolean);

  if (ownedGames.length === 0) {
    return (
      <div className="empty-message">
        <i className="fas fa-gamepad" style={{ fontSize: '2rem' }}></i>
        <p>У вас пока нет игр. Купите что-нибудь в магазине!</p>
        <Link to="/" className="btn">Перейти в магазин</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="section-title">📚 Моя библиотека</h1>
      <div className="games-grid">
        {ownedGames.map(game => (
          <div key={game.id} className="game-card">
            <img className="game-img" src={game.img} alt={game.title} />
            <div className="game-info">
              <div className="game-title">{game.title}</div>
              <div className="game-price">Уже в коллекции</div>
              <Link to={`/game/${game.id}`} className="btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}>Подробнее</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Library;