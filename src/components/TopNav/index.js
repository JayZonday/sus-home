import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './index.css';
import Rose from './pinkrose.png'


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
        <img className='nav-logo' src={Rose}/>
        <a href='mailto:susloquet@gmail.com'><button className='nav-btn' id='mailer' href="mailto:name@mydomain.com">Contact Me</button></a>
        <button className='nav-btn'>About Me</button>
        <button className='nav-btn'>Services</button>
        <button onClick={()=> this.quoteHandler()}className='nav-btn'>Quote of The Day</button>
        <Draggable>
          <div className='qotd'>
            <button onClick={()=> this.handleClose()} className='close-btn'>x</button>
            “You don't get to choose not to pay a price, you only get to choose which price you pay”
            <br/>
            <br/>
            <b>Jordan B. Peterson</b>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default TopNav;
