import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='nav'>
          <div className='brand'>
            Exchange Rate Calculator <i className='fas fa-wallet'></i>{' '}
          </div>
          <ul className='nav-links'>
            <li className='nav-links-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-links-item'>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
