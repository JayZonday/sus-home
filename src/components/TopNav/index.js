import React, { Component } from 'react';
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


  render(){

    return (
      <div className='navbar'>
        <img className='nav-logo' src={Rose}/>
        <button className='nav-btn'>Contact Me</button>
        <button className='nav-btn'>About Me</button>
        <button className='nav-btn'>Services</button>
        <button onClick={()=> this.quoteHandler()}className='nav-btn'>Quote of The Day</button>
        <div className='qotd'>I'm The Quote of The Day</div>
      </div>
    );
  }
}

export default TopNav;
