import React, { Component } from 'react';
import './index.css';


class Footer extends Component {

  render(){

    return (
      <div className='footer'>
        <div className='footer-item'>Grateful Counseling LLC</div>  <div className='footer-item'>River Edge, New Jersey</div>  <div className='footer-item'>Phone - (917)-612-1494</div> <div className='footer-item'><a href='mailto:susloquet@gmail.com' target='_blank' id='mailer' >Susloquet@gmail.com</a></div>
      </div>
    );
  }
}

export default Footer;
