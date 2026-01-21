import React from 'react';
import { Power } from 'lucide-react'; // Icon Power

const PumpControl = ({ status, onToggle }) => {
  const isOne = status === 'ON';

  return (
    <div className="card control-card">
      <div className="card-header">
        <span className="card-label">KONTROL POMPA</span>
        <Power size={24} color={isOne ? '#2ecc71' : '#95a5a6'} />
      </div>
      
      <div className="control-body">
        <p>Status: <strong>{status}</strong></p>
        
        <button 
          className={`toggle-btn ${isOne ? 'btn-on' : 'btn-off'}`}
          onClick={onToggle}
        >
          {isOne ? 'MATIKAN POMPA' : 'NYALAKAN POMPA'}
        </button>
      </div>
    </div>
  );
};

export default PumpControl;