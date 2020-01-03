import React, { Component } from 'react';
import './index.css';


class MainBody extends Component {


  render(){

    return (
      <div className='main-box'>
        <div className='main-slab' id='questions'>Anonymous Advice</div>
        <div className='main-slab' id='schedule'>Schedule a Session</div>
      </div>
    );
  }
}

export default MainBody;
