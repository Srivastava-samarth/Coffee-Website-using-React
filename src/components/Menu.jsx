import React from 'react';
import './Menu.scss';
import img1 from '../assets/Rectangle 7.png'
import img2 from '../assets/Rectangle 9.png'
import img3 from '../assets/Rectangle 11.png'
import img4 from '../assets/Rectangle 13.png'

const Menu = () => {
  return (
    <div className='menu' id='menu'>
        <div className="upperHeading">
            <h1>Enjoy a new blend of coffee style</h1>
            <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        </div>
        <div className="lowerContent">
            <div className="item1">
                <div className="item">
                    <img src={img1} alt="" />
                    <h1>Cappuccino</h1>
                    <p>Coffee 50% | Milk 50%</p>
                    <h4>$8.50</h4>
                </div>
                <div className="btn3">
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item1">
                <div className="item">
                    <img src={img2} alt="" />
                    <h1>Chai Latte</h1>
                    <p>Coffee 50% | Milk 50%</p>
                    <h4>$8.50</h4>
                </div>
                <div className="btn3">
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item1">
                <div className="item">
                    <img src={img3} alt="" />
                    <h1>Macchiato</h1>
                    <p>Coffee 50% | Milk 50%</p>
                    <h4>$8.50</h4>
                </div>
                <div className="btn3">
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item1">
                <div className="item">
                    <img src={img4} alt="" />
                    <h1>Expresso</h1>
                    <p>Coffee 50% | Milk 50%</p>
                    <h4>$8.50</h4>
                </div>
                <div className="btn3">
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu