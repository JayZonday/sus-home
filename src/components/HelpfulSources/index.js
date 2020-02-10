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
              <p className='flip-item'>The Feeling Good Handbook <br/><b>David Burns</b></p>
              <p className='flip-item'>Get Out of Your Mind & Into Your Life <br/> <b>Steven Hayes</b> </p>
              <p className='flip-item'>Anxious for Nothing: Finding Calm in a Chaotic World <br/> <b>Max Lucado</b> </p>
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
              <h1 className='flip-title'>Be Active!</h1>
              <p className='flip-item'>Yoga</p>
              <p className='flip-item'>Cooking</p>
              <p className='flip-item'>Excercise</p>
              <p className='flip-item'>Hiking</p>
              <p className='flip-item'>Sports</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HelpfulSources;
