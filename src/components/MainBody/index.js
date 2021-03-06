import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './index.css';


class MainBody extends Component {


  render(){

    return (
      <div className='main-box'>
        <Carousel>
          <Carousel.Item>
          <div className='testimonial'>
          " Someone who truly listens and makes you feel understood, even in times when you yourself don't quite understand.
           Also, an incredibly comfortable office space that makes you feel at home, and her assistant Dempsey is top notch! "
            <br/>
            - <b className='initial'><i>JW</i></b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " At the age of 12, I walked in completely anxious and lost. Three years later, I walk out truly happy and proud. "
            <br/>
            - <b className='initial'><i>B</i></b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " Susanne has helped me so much. She helped me find the courage to move forward and get unstuck "
            <br/>
            - <b className='initial'><i>J</i></b> -
          </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MainBody;
