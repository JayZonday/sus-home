import React, { Component } from 'react';
import TopNav from './components/TopNav'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import MainBody from './components/MainBody'
import './App.css';


class App extends Component {


  render(){

    return (
      <div>
        <TopNav/>
        <Header/>
        <h1 className='main-title'>Susanne Loquet. MSW. LCSW.</h1>
        <Intro/>
        <MainBody/>
        <Footer/>
      </div>
    );
  }
}

export default App;
