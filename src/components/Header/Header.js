import React, { Component } from 'react';
import logo from './dnd_full_logo.png';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component
{

  render()
  {
    return (
      <div className='main'>
        <div>
          <Link to={"/"}>
          <img src={logo} alt="Logo" height='95px' />
          </Link>
        </div>
      </div>

    );
  }
}

export default Header;
