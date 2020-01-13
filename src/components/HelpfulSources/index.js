import React, { Component } from 'react';
import Calm from './calm.jpg'
import Walk from './todo.jpg'
import Book from './reading.jpg'
import './index.css';



class HelpfulSources extends Component {


  render(){

    return (
      <div className='sources-slab'>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img  className='flip-img'src={Book} alt="books'"/>
            </div>
            <div class="flip-card-back">
              <h1>Top Five Books</h1>
              <p>....</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className='flip-img' src={Calm} alt="oils'"/>
            </div>
            <div class="flip-card-back">
              <h1>Relaxation</h1>
              <p>Music</p>
              <p>Burning Incense</p>
              <p>Essential Oils</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className='flip-img' src={Walk} alt="hobbies'"/>
            </div>
            <div class="flip-card-back">
              <h1>Hobbies/Interests</h1>
              <p>Yoga</p>
              <p>Walk a Dog</p>
              <p>Excercise</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HelpfulSources;
