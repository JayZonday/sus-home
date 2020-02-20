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
              <p className='flip-item'>
                <a className='booklink' href='https://www.amazon.com/Teenage-Brain-Neuroscientists-Survival-Adolescents/dp/B00SZAJPC6/ref=sr_1_1?crid=1WCMLGRMPI6OK&keywords=the+teenage+brain&qid=1582148366&sprefix=the+teenage+%2Caps%2C144&sr=8-1' target='_blank'>
                The Teenage Brain</a>
                <br/><b>Frances Jensen, MD</b></p>
              <p className='flip-item'>
                <a className='booklink' href='https://www.amazon.com/Untangled-Guiding-Teenage-Transitions-Adulthood/dp/0553393073/ref=sr_1_1?keywords=untangled&qid=1582148801&sr=8-1' target='_blank'>
                Untangled</a>
                <br/> <b>Lisa DaMour, PhD</b> </p>
              <p className='flip-item'>
                <a className='booklink' href='https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565/ref=sr_1_1_sspa?crid=2N6XR797B4ELC&keywords=pride+and+prejudice&qid=1582149063&sprefix=pride+and+pr%2Caps%2C165&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFWUDdQOFBRT1BUQUsmZW5jcnlwdGVkSWQ9QTA1MDEyODBOMzlYWVRORDdaQ1omZW5jcnlwdGVkQWRJZD1BMDExNzM5NDE0VjgxQ0FLREtZRkcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
                target='_blank'>
                Pride & Prejudice</a>
              <br/> <b>Jane Austen</b> </p>
              <p className='flip-item'>
                <a className='booklink' href='https://www.amazon.com/Power-Thought-Cards-Card-Deck/dp/1561706124/ref=sr_1_1?crid=2KSLTTE13XEYU&keywords=power+thought+cards+by+louise+hay&qid=1582149536&sprefix=power+thought+cards%2Caps%2C151&sr=8-1' target='_blank'>
                Power Thought Cards Deck </a>
              <br/> <b>Louise Hay</b> </p>
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
              <p className='flip-item'>Deep & Focused Breathing</p>
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
