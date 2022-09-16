import React, { useState } from 'react';
import PUP from '../images/PUPLogo.png'

function Navbar() {
  const [page, setPage] = useState('company');

  console.log('Page:: ' + page);

  return (
    <div className='top-navbar d-flex align-items-center'>
      <div className='title-nav-container d-flex align-items-center'>
        <img src={PUP} alt='PUP' height={40} />
        <h3 className='my-0 mx-2'>OJT2 Portfolio</h3>
      </div>

      <div className='links-nav-container d-flex'>
        <button className='link-btn' onClick={() => setPage('company')}>Company Profile</button>
        <button className='link-btn' onClick={() => setPage('reports')}>Report</button>
        <button className='link-btn' onClick={() => setPage('assessment')}>Assessment</button>
        <button className='link-btn' onClick={() => setPage('evidences')}>Documents</button>
      </div>
    </div>
  )
}

export default Navbar;