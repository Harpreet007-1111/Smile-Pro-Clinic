import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-cont'>
        <div className="logo">
          <img src="/logo512.png" alt="Logo for SMILE PRO CLINIC" />
          <HashLink smooth to="#">SMILE PRO CLINIC</HashLink>
        </div>

        {(showMenu === false) ? <BiMenu className='menu' onClick={() => setShowMenu(true)} /> : <AiOutlineCloseCircle className='close' onClick={() => setShowMenu(false)} />}

        {(showMenu === true) && (
          <nav className={showMenu ? 'show' : 'close'}>
          <HashLink smooth to="#">Home</HashLink>
          <HashLink smooth to="#about">About</HashLink>
          <HashLink smooth to='#services'>Services</HashLink>
          <HashLink smooth to="#test">Testimonials</HashLink>
          <HashLink smooth to="#gallery">Gallery</HashLink>
          <HashLink smooth to="#contact">Contact</HashLink>
        </nav>
        )}
    </div>
  )
}

export default Navbar;