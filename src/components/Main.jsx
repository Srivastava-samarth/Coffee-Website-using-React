import React from 'react'
import './Main.scss'

const Main = () => {
  return (
    <div className='main' id='home'>
        <div className="content">
        <h2>We’ve got your morning covered with</h2>
        <h1>Coffee</h1>
        <p>It is best to start your day with a cup of coffee. Discover the<br/> best flavours coffee you will ever have. We provide the best<br/> for our customers.</p>
        <div className="order">
        <button className='btn'><a href="#menu">Order Now</a></button>
        </div>
        </div>
    </div>
  )
}

export default Main