import React, { Component } from 'react';
import './index.css';


class HelpfulSources extends Component {


  render(){

    return (
      <div className='sources-slab'>
        <div className='source' id='reading'><h2 className='source-title'>Reading List</h2></div>
        <div className='source' id='calm'><h2 className='source-title'>Calm Your Mind</h2></div>
        <div className='source' id='todo'><h2 className='source-title'>Things To Do</h2></div>
      </div>
    );
  }
}

export default HelpfulSources;
