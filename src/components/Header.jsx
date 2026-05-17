import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGameContext } from '../contexts/GameContext';

const Header = () => {
  const { cartCount } = useGameContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, background: 'linear-gradient(135deg,#a78bfa,#c084fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Nexus<span style={{ color: 'white', background: 'none' }}>Store</span>
            </div>
          </Link>
          
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </button>

          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Магазин</NavLink></li>
            <li><NavLink to="/library" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Библиотека</NavLink></li>
            <li>
              <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>
                Корзина
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;