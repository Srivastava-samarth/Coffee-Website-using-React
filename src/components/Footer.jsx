import React from 'react'
import './Footer.scss'
import img from '../assets/Group 54.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="one">
            <h1>Bean Scene</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry's<br/> standard dummy text ever since the 1500s, when<br/> an unknown printer took a galley of type and scrambled it to<br/> make a type specimen book.</p>
            <img src={img} alt="" />
        </div>
        <div className="two">
            <h1 className='ab'>About</h1>
            <ul>
                <li>Menu</li>
                <li>Features</li>
                <li>News & Blogs</li>
                <li>Help & Support</li>
            </ul>
        </div>
        <div className="two">
        <h1 className='comp'>Company</h1>
            <ul>
                <li>How we work</li>
                <li>Terms of service</li>
                <li>Pricing</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className="two cont">
        <h1>Contact Us</h1>
            <ul>
                <li>Akshya Nagar 1st Block 1st Cross,<br/> Rammurthy nagar, Bangalore-560016</li>
                <li>+1 202-918-2132</li>
                <li>beanscene@mail.com</li>
                <li>www.beanscene.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer