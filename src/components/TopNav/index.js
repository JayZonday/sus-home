import React, { Component } from 'react';
import './index.css';
import Rose from './pinkrose.png'


class TopNav extends Component {


  render(){

    return (
      <div className='navbar'>
        <img className='nav-logo' src={Rose}/>
        <button className='nav-btn'>Contact Me</button>
        <button className='nav-btn'>About Me</button>
        <button className='nav-btn'>Services</button>
        <button className='nav-btn'>Quote of The Day</button>
      </div>
    );
  }
}

export default TopNav;
