import React from 'react';
import './Feedback.scss';
import img1 from '../assets/Rectangle 9 (1).png';
import img2 from '../assets/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair (1).jpg'
import img3 from '../assets/young-bearded-man-with-striped-shirt (1).jpg'
import { Carousel } from 'react-responsive-carousel';

const Feedback = () => {
  return (
    <div className='feedback'>
        <div className="feedback-content">
            <h1>Our coffee perfection feedback</h1>
            <p>Our customers has amazing things to say about us</p>
        </div>
        <div className="feedback-image">
            <div className="description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> galley of type and scrambled it to make a type specimen book. It has survived not only five<br/> centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset.....</p>
                <h1>Jonny Thomas</h1>
                <h4>Project Manager</h4>
            </div>
            <div className="user">
                <img src={img1} alt="" />
            </div>
        </div>
        <div className="feedback-image">
            <div className="description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> galley of type and scrambled it to make a type specimen book. It has survived not only five<br/> centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset.....</p>
                <h1>Sammy James</h1>
                <h4>Project Lead</h4>
            </div>
            <div className="user">
                <img src={img3} alt="" />
            </div>
        </div>
        <div className="feedback-image">
            <div className="description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> galley of type and scrambled it to make a type specimen book. It has survived not only five<br/> centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset.....</p>
                <h1>Laura Williams</h1>
                <h4>Assistance Manager</h4>
            </div>
            <div className="user">
                <img src={img2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Feedback