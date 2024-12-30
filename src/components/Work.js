import React from "react";
import PickMeals from "../Assets/pick-meal-01.png";
import ChooseMeals from "../Assets/choose.png";
import DeliveryMeals from "../Assets/delivery.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your meals from a wide variety of delicious options, carefully crafted to satisfy every taste and craving.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose meals that fit your preferences, with fresh ingredients and bold flavors ensuring every bite is an unforgettable delight.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy convenient and fast meal delivery, bringing restaurant-quality dishes straight to your doorstep for a hassle-free dining experience.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        We bring you the finest dishes prepared with love and the freshest ingredients.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;