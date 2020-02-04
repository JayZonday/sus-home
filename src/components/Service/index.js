import React, { Component } from 'react';
import Office from './office.jpeg'
import './index.css';

class Service extends Component {


  render(){

    return (
      <div className='service-section'>
        <div className='service-menu'>
          <ul>Available Services</ul>
          <li>Walk & Talk Therapy</li>
          <li>Creative Counseling</li>
          <li>Support Groups</li>
          <a href='mailto:susloquet@gmail.com?subject=Initial%20Appointment%20Setup'  target='_blank' rel="noopener noreferrer" >
            <button className='appt-mailer'>Book An Appointment Today</button>
          </a>
        </div>
        <img className='tool-img' alt='office-pic' src={Office} />
      </div>
    );
  }
}

export default Service;
