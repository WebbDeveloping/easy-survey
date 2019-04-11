import React from 'react';
import './Question.css';
import Options from '../Options/Options';

export default function Question() {
  return (
    <div className='question-container'>
      <div className='question-title-and-remove-question-button'>
        <div>Question Title...</div>
        <div className='remove-question-x'>X</div>
      </div>
      <hr />
      <div className='option-list-container'>
        <Options />
        <Options />
        <Options />
      </div>
    </div>
  );
}
