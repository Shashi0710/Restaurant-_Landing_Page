import React from 'react'
import ProfilePic from "../Assets/john-doe.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='Primary-heading'> What They Are Saying </h1>
            <p className='primary-text'>Don’t just take our word for it see what our guests are saying about their dining experience!</p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=""/>
            <p>Our customers say it best! Hear what they love about Savory Table and their unforgettable dining experiences.</p>
        <div className='testimonial-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>John Doe</h2>
        </div>

      
    </div>
  )
}

export default Testimonials
