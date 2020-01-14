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
        <button className='nav-btn'><span>Services</span></button>
        <button onClick={()=> this.quoteHandler()}className='nav-btn'><span>Quote of The Month</span></button>

          <div className='qotd'>
            <button onClick={()=> this.handleClose()} className='close-btn'>x</button>
            “You don't get to choose not to pay a price, you only get to choose which price you pay”
            <br/>
            <br/>
            <b>Jordan B. Peterson</b>
          </div>

      </div>
    );
  }
}

export default TopNav;
