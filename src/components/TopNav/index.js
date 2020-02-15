import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
import Sunflower from './sunflower.png'


class TopNav extends Component {

  quoteHandler = () => {
    if (document.querySelector('.qotd').style.display === 'block')
    document.querySelector('.qotd').style.display = 'none'
    else{
    document.querySelector('.qotd').style.display = 'block'
    }
  }

  handleClose = () => {
    document.querySelector('.qotd').style.display = 'none'
  }


  render(){

    return (
      <div className='navbar'>
        <NavLink className='nav-logo' title='Return to Homepage'to="/"><span id='home-title'>GCS</span> <img alt='sunflower2' className='sunflower' src={Sunflower}/> </NavLink>
        <NavLink to="/about" className='nav-btn' >About Me </NavLink>
        <NavLink to="/services" className='nav-btn'>Services</NavLink>
        <NavLink to='/helpful-resources' className='nav-btn'>Helpful Resources</NavLink>
        <a href='mailto:susloquet@gmail.com' target='_blank' rel="noopener noreferrer" className='nav-btn' >Contact Me</a>
      </div>
    );
  }
}

export default TopNav;
