import React from 'react';
import './QuestionList.css';
import Question from '../Question/Question';

export default function QuestionList() {
  return (
    <div className='question-list-container'>
      <Question />
      <Question />
      <Question />
    </div>
  );
}
