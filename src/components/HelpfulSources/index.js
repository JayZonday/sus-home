import React, { Component } from 'react';
import Calm from './calm.jpg'
import Yoga from './yoga.jpeg'
import Book from './reading.jpg'
import './index.css';



class HelpfulSources extends Component {


  render(){

    return (
      <div className='sources-slab'>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img  className='flip-img'src={Book} alt="books'"/>
            </div>
            <div className="flip-card-back">
              <h1 className='flip-title'>Top Three Books</h1>
              <p className='flip-item'>....</p>
              <p className='flip-item'>...</p>
              <p className='flip-item'>...</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className='flip-img' src={Calm} alt="oils'"/>
            </div>
            <div className="flip-card-back">
              <h1 className='flip-title'>Relaxation</h1>
              <p className='flip-item'>Music</p>
              <p className='flip-item'>Burning Incense</p>
              <p className='flip-item'>Essential Oils</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className='flip-img' src={Yoga} alt="hobbies'"/>
            </div>
            <div className="flip-card-back">
              <h1 className='flip-title'>Hobbies & Interests</h1>
              <p className='flip-item'>Yoga</p>
              <p className='flip-item'>Cooking</p>
              <p className='flip-item'>Excercise</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HelpfulSources;
