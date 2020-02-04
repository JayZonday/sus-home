import React, { Component } from 'react';
import Sunflower from './sf-corner-bg.png'
import './index.css';


class AskMeAnything extends Component {

  state = {
    question: '',
    subject: ''
  }

  handleQuestion = (event)  => {
    this.setState({
      question: event.target.value
    })
  }

  handleSubject = (event)  => {
    this.setState({
      subject: event.target.value
    })
  }


  render(){

    return (
      <div className='ask-slab'>
        <div className='title-slab'><h1 className='ask-title'>Ask Me Anything</h1></div>
        <input  placeholder='Subject' onChange={this.handleSubject} className='subject'></input>
        <input placeholder='Question'onChange={this.handleQuestion}  className='question'></input>
        <a href={"mailto:susloquet@gmail.com?Subject=" + this.state.subject + "&body=" + this.state.question} rel="noopener noreferrer" target='_blank'><button className='send-btn'>Send</button></a>
        <img alt='sunflower-pic' className='sunflower-design'src={Sunflower}/>
      </div>
    );
  }
}

export default AskMeAnything;
