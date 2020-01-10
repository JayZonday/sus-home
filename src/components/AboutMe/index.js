import React, { Component } from 'react';
import BioPic from './female.png'
import './index.css';


class AboutMe extends Component {


  render(){

    return (
      <div className='about-slab'>
        <img className='bio-pic' src={BioPic} />
        <div className='mini-bio'>
          Susanne Loquet is a Clinical Social Worker Specialist in River Edge, New Jersey.
          She graduated with honors in 1999. Having more than 20 years of diverse experiences, especially in
          CLINICAL SOCIAL WORK, Susanne Loquet affiliates with no hospital, cooperates with many other doctors and specialists
          in medical group Wellqor Psychological Services Northeast, Pc.
          <br/>
          <br/>
          <span className='caller'>Call Susanne Loquet @ (917)-612-1494 for more information and advice or to book an appointment.</span>
        </div>
      </div>
    );
  }
}

export default AboutMe;
