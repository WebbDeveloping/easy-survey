import React from 'react';
import './SurveyItem.css';

const surveyImg = require('./automobile-automotive-car-1386649.jpg');

export default function SurveyItem() {
  return (
    <div className='survey-container'>
      <img className='survey-image' alt='words' src={surveyImg} />
      <h3 className='survey-title'>Survey Title</h3>
    </div>
  );
}
