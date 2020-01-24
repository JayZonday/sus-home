import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';


class MainBody extends Component {


  render(){

    return (
      <div className='main-box'>
      <NavLink to='/helpful-resources' className='main-slab' id='questions'>Helpful Resources</NavLink>
      </div>
    );
  }
}

export default MainBody;
