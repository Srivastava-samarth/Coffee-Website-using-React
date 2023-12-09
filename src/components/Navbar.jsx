import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
  const  [clicked,setClicked] = useState(false);
  const handleClick = ()=>{
    setClicked(!clicked);
  }
  return (
    <>
    <nav>
        <a href='#home' className='logo'>Bean Scene</a>
        <ul id='navbar' className={clicked?'#navbar active':'#navbar'}>
            <li><a  href="#home">Home</a></li>
            <li><a  href="#menu">Menu</a></li>
            <li><a  href="#about">About Us</a></li>
            <li><a  href="#contact">Contact Us</a></li>
        </ul>
        <div className="login">
            <a href="#login">LogIn</a>
            <button>SignUp</button>
        </div>

        <div className="mobile">
        <i id='bar' className={clicked?'bx bxs-x-circle':'bx bx-menu'} onClick={handleClick}></i>
        </div>
    </nav>
    </>
  )
}

export default Navbar