import React from 'react';
import PUP from '../images/PUPLogo.png'

function Navbar() {
  return (
    <div className='top-navbar d-flex align-items-center'>
        <img src={PUP} alt='PUP' height={40}/>
        <h3 className='my-0 mx-2'>OJT2 Portfolio</h3>
    </div>
  )
}

export default Navbar;