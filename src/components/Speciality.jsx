import React from 'react'
import './Speciality.scss'
import img1 from '../assets/coffee-beans 1.png'
import img2 from '../assets/badge 1.png'
import img3 from '../assets/coffee-cup 1.png'
import img4 from '../assets/best-price 1.png'

const Speciality = () => {
  return (
    <div className='speciality'>
        <div className="upperHeading">
            <h1>Why are we different !</h1>
            <p>We don’t just make your coffee, we make your day!</p>
        </div>
        <div className="lowerContent1">
            <div className="item11">
                <div className="item1">
                    <img src={img1} alt="" />
                    <h1>Supreme Beans</h1>
                    <p>Beans that provides<br/> great taste</p>
                    
                </div>
            </div>
            <div className="item11">
                <div className="item1">
                    <img src={img2} alt="" />
                    <h1>High Quality</h1>
                    <p>We provide the<br/> highest quality</p>
                    
                </div>
            </div>
            <div className="item11">
                <div className="item1">
                    <img src={img3} alt="" />
                    <h1>Extraordinary</h1>
                    <p>Coffee like you have<br/> never tasted</p>
                    
                </div>
            </div>
            <div className="item11">
                <div className="item1">
                    <img src={img4} alt="" />
                    <h1>Affordable Price</h1>
                    <p>Our Coffee prices are<br/> easy to afford</p>
                    
                </div>
            </div>
            </div>
            <div className="joinUs">
                <p>Great ideas start with great coffee, Lets help you achieve that Get started today.</p>
                <h1>Get Started Today</h1>
                <button id='login'>Join Us</button>
            </div>
    </div>
  )
}

export default Speciality;