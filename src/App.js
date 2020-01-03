import React, { Component } from 'react';
import TopNav from './components/TopNav'
import Header from './components/Header'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import './App.css';


class App extends Component {


  render(){

    return (
      <div>
        <TopNav/>
        <Header/>
        <MainBody/>
        <Footer/>
      </div>
    );
  }
}

export default App;
