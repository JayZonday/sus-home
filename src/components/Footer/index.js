import React, { Component } from 'react';
import './index.css';


class Footer extends Component {

  render(){

    return (
      <div className='footer'>
        <div className='footer-item'>Grateful Counseling Services LLC</div>
        <div className='footer-item'>Bergen County, New Jersey</div>
        <div className='footer-item'>
          Phone: <a className='tele' href='tel:917-612-1494'><b>(917)-612-1494</b></a>
        </div>
        <div className='footer-item'><a href='mailto:susloquet@gmail.com' target='_blank' id='mailer' >
          <b>Susloquet@gmail.com</b></a>
        </div>
      </div>
    );
  }
}

export default Footer;
