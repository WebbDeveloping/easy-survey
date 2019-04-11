import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Dashboard from './components/pages/Dashboard/Dashboard';
import CreateSurvey from './components/pages/CreateSurvey/CreateSurvey';
import Register from './components/authentication/Register/Register';
import Login from './components/authentication/Login/Login';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNav />
        <Register />
        <TopNav />
        <Login />
        <TopNav />
        <Dashboard />
        <TopNav />
        <CreateSurvey />
      </div>
    );
  }
}

export default App;
