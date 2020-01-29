import React, { Component } from 'react';
import MainBody from '../MainBody'
import './index.css';


class Header extends Component {


  render(){

    return (
      <div className='header'>
        <div className='main-title-box'>
          <h1 className='main-title' id='biz'>
            Grateful Counseling Services LLC
            <br/>
            <span className='title-desc'>Creative Counseling <br/> Walk & Talk Therapy</span>
          </h1>

          <h1 className='main-title' id='name'>
            Susanne Loquet
            <br/>
            <span className='license'>MSW, LCSW</span>
            <br/>
            <span className='license'>Bergen County, New Jersey</span>
            <br/>
          </h1>
        </div>
        <MainBody/>
      </div>
    );
  }
}

export default Header;
