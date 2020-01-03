import React, { Component } from 'react';
import './index.css';


class Header extends Component {


  render(){

    return (
      <div className='header'>
        <div className='main-title-box'>
          <h1 className='main-title' id='biz'>
            Grateful Counseling LLC
            <br/>
            <span className='title-desc'>Creative Counseling Walk & Talk Therapy</span>
          </h1>

          <h1 className='main-title' id='name'>
            Susanne Loquet
            <br/>
            <span className='license'>MSW, LCSW</span>
            <br/>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
