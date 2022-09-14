import React from 'react';
import './App.scss';
import WeekReport from './components/weekly-progress';
import Profile from './components/profile';
import CompanyProfile from './components/company-profile';
import Navbar from './components/navbar';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Profile />
      <CompanyProfile />
      <WeekReport />
    </div>
  );
}

export default App;
