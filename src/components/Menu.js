import React from 'react';
import grilledChicken from "../Assets/chicken.png";
import Pasta from "../Assets/pasta.png";
import CheeseCake from "../Assets/cheese cake.png";
import Juice from "../Assets/juice.png";
import Burger from "../Assets/burger.png";
import MixedRice from "../Assets/mixed-rice.png";

const Menu = () => {
  const workInfoData = [
    {
        image:MixedRice,
        title: "Mixed Rice",
        price: "Rs.1800.00",
      },
    {
      image: grilledChicken,
      title: "Grilled Chicken",
      price: "Rs.1250.00",
    },
    {
      image: Pasta,
      title: "Pasta",
      price: "Rs.2000.00",
    },
    {
      image: CheeseCake,
      title: "Cheese Cake",
      price: "Rs.1940.00",
    },
    {
        image: Juice,
        title: "Fruit Juice",
        price: "Rs.460.00",
      },
      {
        image: Burger,
        title: "Burger",
        price: "Rs.650.00",
      },
  ];
  return (
    <div className="menu-section-wrapper">
      <div className="menu-section-top">
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">Our Menu</h1>
        <p className="primary-text">
        We bring you the finest dishes prepared with love and the freshest ingredients.
        </p>
      </div>
      <div className="menu-section-bottom">
         {workInfoData.map((data) => (
             <div className="menu-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                 <img src={data.image} alt={data.title} />
                </div>
                <h2>{data.title}</h2>
                <p>{data.price}</p> {/* Replace data.image with data.price */}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;













/*const Menu = () => {
  const dishes = [
    { name: 'Grilled Chicken', price: '$15' },
    { name: 'Pasta Primavera', price: '$12' },
    { name: 'Cheesecake', price: '$8' },
  ];

  return (

    <section id="menu" style={{ padding: '2rem', textAlign: 'center' }}>
    <p className="primary-subheading">Menu</p>
      <h2>Our Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dishes.map((dish, index) => (
          <li key={index} style={{ margin: '1rem 0' }}>
            {dish.name} - {dish.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;*/
