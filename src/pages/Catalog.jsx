import React from 'react';
import { games } from '../gamesData';
import GameCard from '../components/GameCard';

const Catalog = () => {
  return (
    <>
      <h1 className="section-title">🔥 Магазин игр</h1>
      <p>Покупай цифровые игры и пополняй свою библиотеку</p>
      <div className="games-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default Catalog;