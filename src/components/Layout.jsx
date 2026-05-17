import React from 'react';
import Header from './Header';
import { useGameContext } from '../contexts/GameContext';
import Toast from './Toast';

const Layout = ({ children }) => {
  const { notification, showNotification } = useGameContext();

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem', flex: 1 }}>
        {children}
      </main>
      <footer>
        <p>© 2025 NexusStore — платформа для покупки и управления играми</p>
      </footer>
      <div className="toast-container">
        {notification && (
          <Toast
            message={notification.message}
            type={notification.type}
            onClose={() => showNotification(null)}
          />
        )}
      </div>
    </>
  );
};

export default Layout;