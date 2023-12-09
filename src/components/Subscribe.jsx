import React from 'react'
import './Subscribe.scss'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Subscribe to get latest news</h1>
        <p>Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className="subscribe-email">
            <input type="email" name="email" id="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe