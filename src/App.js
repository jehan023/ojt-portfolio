import React, { useState } from 'react';
import './App.scss';
import WeekReport from './components/weekly-progress';
import Profile from './components/profile';
import CompanyProfile from './components/company-profile';
import Navbar from './components/navbar';
import Assessment from './components/assessment';
import Evidences from './components/evidences';

import { Col, Row, Tab, Tabs } from 'react-bootstrap';

function App() {
  const [key, setKey] = useState('company'); //useState for Tabs
  return (
    <div className='App'>
      <Navbar />
      <Profile />
      <div className='contents-container'>
        <Tabs
          id="lawyers-controlled-tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="contents-container-tab fw-bold"
        >
          <Tab eventKey="company" title="Company Profile">
            <div className='content-tab'>
              <CompanyProfile />
            </div>
          </Tab>

          <Tab eventKey="report" title="Weekly Progress Report">
            <div className='content-tab'>
              <WeekReport />
            </div>
          </Tab>

          <Tab eventKey="assessment" title="Assessment">
            <div className='content-tab'>
              <Assessment/>
            </div>
          </Tab>

          <Tab eventKey="evidences" title="Evidences">
            <div className='content-tab'>
              <Evidences/>
            </div>
          </Tab>
        </Tabs>

      </div>
    </div>
  );
}

export default App;
