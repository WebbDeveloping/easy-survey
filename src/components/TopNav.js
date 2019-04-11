import React from 'react';
import './TopNav.css';

export default function TopNav() {
  return (
    <div>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#news'>News</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li className='floatRight'>
          <a href='#about'>About</a>
        </li>
      </ul>
    </div>
  );
}
