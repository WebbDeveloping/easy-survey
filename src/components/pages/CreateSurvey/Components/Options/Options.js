import React from 'react';
import './Options.css';

export default function Options() {
  return (
    <div className='option-container'>
      <div style={{ color: '#69deba' }} className='stuff'>
        +
      </div>
      <div className='stuff'>Option Title...</div>
      <div style={{ color: 'red' }} className='stuff'>
        X
      </div>
    </div>
  );
}
