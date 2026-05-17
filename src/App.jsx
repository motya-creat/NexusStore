import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import Layout from './components/Layout';
import Catalog from './pages/Catalog';
import GameDetail from './pages/GameDetail';
import Cart from './pages/Cart';
import Library from './pages/Library';

function App() {
  return (
    <GameProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Layout>
    </GameProvider>
  );
}

export default App;