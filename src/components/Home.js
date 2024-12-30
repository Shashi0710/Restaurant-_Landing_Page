import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner.png";
import { FiArrowRight } from "react-icons/fi";


function Home() {
   return( 
 <div className="home-container">
    <Navbar />
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
        Welcome to Savory Table.
        </h1>
        <p className='Primary-text'>
        Where every dish tells a story and every meal is a memory in the making. Fresh ingredients. Timeless recipes. Unforgettable experiences.
        </p>
        <br />
        <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
       </div>
    </div> 
  </div>
   );
};
export default Home; 
