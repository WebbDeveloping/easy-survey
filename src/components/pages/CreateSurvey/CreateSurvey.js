import React from 'react';
import './CreateSurvey.css';
import QuestionList from './Components/QuestionList/QuestionList';

export default function CreateSurvey() {
  return (
    <div className='main-gray-box-createsurvey'>
      <h3>Create Survey</h3>
      <hr className='green-line' />
      <div className='create-survey-white-box'>
        <div className='add-survey-title'>
          <h3>Add Survey Title...</h3>
          <div className='add-remove-survey-title'>
            <h1 className='add-minus-button'>+</h1>
            <h1 className='add-minus-button'>-</h1>
          </div>
        </div>
        <hr className='green-line-add-page' />
        <div className='question-option-container'>
          <div className='top-three-question-options'>
            <div className='question-option-box'>Single Line Text</div>
            <div className='question-option-box'>CheckBox</div>
            <div className='question-option-box'>Multi-Line-Text</div>
          </div>
          <div className='bottom-two-question-options'>
            <div className='question-option-box'>Multiple Choice</div>
            <div className='question-option-box'>Drop Down</div>
          </div>
        </div>
        <hr className='green-line-add-page' />
        <QuestionList />
      </div>
    </div>
  );
}
