import React, { Component } from 'react';
import BioPic from './bio.jpeg'
import Sunflower from './sf-corner-bg.png'
import './index.css';


class AboutMe extends Component {


  render(){

    return (
      <div className='about-slab'>
        <img className='bio-pic' alt='susanne' src={BioPic} />
        <div className='mini-bio'>
          Hi, I'm <i>Susanne Loquet</i>, a licensed clinical social worker with more than 30 years experience working with children, adults, & couples.
          I have a diverse work experience which has enabled me to connect my strengths to meet the needs of my clients abilities. I conduct my sessions
          in my sunfilled home office & walk and talk therapy for my busy "on the go" clients, mostly accompanied by my dog, Dempsey.
          I look forward to speaking with you to see if we might connect and work together!
          <br/>
          <br/>
          <span className='caller'><b>Call Susanne Loquet @ <a className='tele' href='tel:917-612-1494'>917-612-1494</a> for more information and advice or to book an appointment.</b></span>
        </div>
        <img alt='sunflower' className='sf-about-design'src={Sunflower}/>
      </div>
    );
  }
}

export default AboutMe;
