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
              <img  className='flip-img'src={Book} alt="Avatar'"/>
            </div>
            <div class="flip-card-back">
              <h1>Top Five Books</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className='flip-img' src={Calm} alt="Avatar'"/>
            </div>
            <div class="flip-card-back">
              <h1>Essential Oils</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className='flip-img' src={Walk} alt="Avatar'"/>
            </div>
            <div class="flip-card-back">
              <h1>Hobbies/Interests</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HelpfulSources;
