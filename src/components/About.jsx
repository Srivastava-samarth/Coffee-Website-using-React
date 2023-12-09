import React from 'react';
import './About.scss';
import mug from '../assets/coffee_mug.png';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="detail">
        <h1>Discover the best coffee</h1>
        <p>Bean Scene is a coffee shop that provides you with quality coffee<br/> that helps boost your productivity and helps build your mood.<br/> Having a cup of coffee is good, but having a cup of real coffee is<br/> greater. There is no doubt that you will enjoy this coffee more<br/> than others you have ever tasted.</p>
        <div className="btn2">
            <button>More</button>
        </div>
        
        </div>
        <div className="image">
            <img className='img' src={mug} alt="" />
        </div>
    </div>
  )
}

export default About