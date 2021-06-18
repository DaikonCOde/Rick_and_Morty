import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Nav = ( ) => {
  return (
    <div className="header header-site">
        <div className="header-brand">
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>
      </div>
  )
}

export default Nav;