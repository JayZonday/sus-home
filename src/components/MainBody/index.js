import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
            - <b>J</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>M</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>S</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>A</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>M</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>S</b> -
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='testimonial'>
          " "
            <br/>
            - <b>A</b> -
          </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MainBody;
