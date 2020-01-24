import React, { Component } from 'react';
import './index.css';


class Footer extends Component {

  render(){

    return (
      <div className='footer'>
        <div className='footer-item'>Grateful Counseling Services LLC</div>  <div className='footer-item'>River Edge, New Jersey</div>  <div className='footer-item'>Phone - <a className='tele' href='tel:917-612-1494'>(917)-612-1494</a></div> <div className='footer-item'><a href='mailto:susloquet@gmail.com' target='_blank' id='mailer' >Susloquet@gmail.com</a></div>
      </div>
    );
  }
}

export default Footer;
