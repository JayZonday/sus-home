import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Service from './components/Service'
import AskMeAnything from './components/AskMeAnything'
import HelpfulSources from './components/HelpfulSources'
import MainBody from './components/MainBody'
import CentralHome from './components/CentralHome'
import './App.css';


class App extends Component {


  render(){

    return (
      <Router>
        <TopNav/>
        <Switch>
          <Route path='/' exact component={ CentralHome } />
          <Route path='/about' exact component={ AboutMe } />
          <Route path='/services' exact component={ Service } />
          <Route path='/ask-me-anything' exact component={ AskMeAnything } />
          <Route path='/helpful-resources' exact component={ HelpfulSources } />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
