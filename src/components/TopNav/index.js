import React, { Component } from 'react';
import Draggable from 'react-draggable';
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
        <NavLink title='Return to Homepage'to="/"><span id='home-title'>GCS</span> <img className='nav-logo' src={Sunflower}/> </NavLink>
        <a href='mailto:susloquet@gmail.com' target='_blank'><button className='nav-btn' id='mailer' href="mailto:name@mydomain.com">Contact Me</button></a>
        <NavLink to="/about"> <button className='nav-btn'>About Me</button> </NavLink>
        <NavLink to="/services"><button className='nav-btn'><span>Services</span></button></NavLink>
        <NavLink to='/ask-me-anything'><button className='nav-btn' >Anonymous Advice</button></NavLink>
      </div>
    );
  }
}

export default TopNav;
