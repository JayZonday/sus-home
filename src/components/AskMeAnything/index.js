import React, { Component } from 'react';
import './index.css';


class AskMeAnything extends Component {


  render(){

    return (
      <div className='ask-slab'>
        <div className='title-slab'><h1 className='ask-title'>Ask Me Anything</h1></div>
        <input  placeHolder='Subject' className='subject'></input>
        <input placeHolder='Write Me a Question' className='question'></input>
        <a href='mailto:susloquet@gmail.com' target='_blank'><button className='send-btn'>Send</button></a>

      </div>
    );
  }
}

export default AskMeAnything;
