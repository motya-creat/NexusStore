import React from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">
        {type === 'success' && <i className="fas fa-check-circle"></i>}
      </div>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Toast;