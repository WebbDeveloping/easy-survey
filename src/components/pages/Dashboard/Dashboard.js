import React from 'react';
import './Dashboard.css';
import Article from './Components/Article';
import SurveyList from './Components/SurveyList.js/SurveyList';

export default function Dashboard() {
  return (
    <div className='main-dash-container'>
      <div className='top-dashboard-container-row'>
        <Article />
      </div>
      <hr className='green-line' />
      <div className='bottom-dashboard-container'>
        <SurveyList />
      </div>
    </div>
  );
}
