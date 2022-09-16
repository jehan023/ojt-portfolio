import React, { useState } from 'react';
import './App.scss';
import WeekReport from './components/weekly-progress';
import Profile from './components/profile';
import CompanyProfile from './components/company-profile';
//import Navbar from './components/navbar';
import Assessment from './components/assessment';
import Evidences from './components/evidences';
import PUP from './images/PUPLogo.png';
//import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

function App() {
  const [page, setPage] = useState('company');

  const [isActive, setIsActive] = useState(false);

  const handleToggle = (event) => {
    //toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div className='App'>

      <div className='top-navbar d-flex'>
        <div className='title-nav-container d-flex align-items-center'>
          <img src={PUP} alt='PUP' height={40} />
          <h3 className='my-0 mx-2'>OJT2 Portfolio</h3>
        </div>

        <a href="#!" class="hamburger-button" onClick={() => handleToggle(true)}>
          <span className={isActive ? 'hamburger hidden' : 'hamburger'}></span>
          <span className={isActive ? 'hamburger hidden' : 'hamburger'}></span>
          <span className={isActive ? 'hamburger hidden' : 'hamburger'}></span>
          <FaTimes className={isActive ? 'nav-close' : 'hidden'} />
        </a>


        <div className={isActive ? 'links-nav-container d-flex' : 'links-nav-container d-flex hidden'}>
          <button className={page === 'company' ? 'link-btn link-active' : 'link-btn'} onClick={() => setPage('company')}>Company Profile</button>
          <button className={page === 'reports' ? 'link-btn link-active' : 'link-btn'} onClick={() => setPage('reports')}>Reports</button>
          <button className={page === 'assessment' ? 'link-btn link-active' : 'link-btn'} onClick={() => setPage('assessment')}>Assessment</button>
          <button className={page === 'evidences' ? 'link-btn link-active' : 'link-btn'} onClick={() => setPage('evidences')}>Documents</button>
        </div>
      </div>

      <Profile />

      <div className='contents-container'>
        {(() => {
          switch (page) {
            case 'company':
              return <CompanyProfile />
            case 'reports':
              return <WeekReport />
            case 'assessment':
              return <Assessment />
            case 'evidences':
              return <Evidences />
            default:
              return <CompanyProfile />
          }
        })()}
      </div>

    </div>
  );
}

export default App;
