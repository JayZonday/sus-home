import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';


class MainBody extends Component {


  render(){

    return (
      <div className='main-box'>
        <NavLink to='/ask-me-anything' className='main-slab' id='questions'><div>Anonymous Advice</div></NavLink>
        <NavLink to='/scheduling' className='main-slab' id='schedule'><div id='schedule'>Helpful <br/>Resources</div></NavLink>
      </div>
    );
  }
}

export default MainBody;
