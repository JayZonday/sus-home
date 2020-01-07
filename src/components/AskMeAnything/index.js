import React, { Component } from 'react';
import './index.css';


class AskMeAnything extends Component {


  render(){

    return (
      <div className='ask-slab'>
        <div className='title-slab'>Ask Me Anything</div>
        <input className='subject'></input>
        <input className='question'></input>
        <button className='send-btn'>Send</button>

      </div>
    );
  }
}

export default AskMeAnything;
