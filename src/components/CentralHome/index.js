import React, { Component } from 'react';
import Header from '../Header'
import MainBody from '../MainBody'
import './index.css';


class CentralHome extends Component {


  render(){

    return (
      <div>
        <Header/>
        <MainBody/>
      </div>
    );
  }
}

export default CentralHome;
