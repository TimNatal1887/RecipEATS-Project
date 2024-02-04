import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import About from "./About.jsx";
import "./Landing.css"

const Landing = () => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const navigate = useNavigate()
  
  return (
    <div className="landing">
        {/* <div className="about">
         <About />
        </div> */}
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div className="carousel-content">
        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
          <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706806167/recipEATS-LandingPage2_lxm0k8.jpg" alt="People Feasting"></img>
        </div>
        <div className={index === 1 ? "carousel-item active" : "carousel-item"}>
          <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807150/recipEATS-LandingCarousel_isbl3d.jpg" alt="Pasta"></img>
        </div>
        <div className={index === 2 ? "carousel-item active" : "carousel-item"}>
        <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807152/recipEATS-LandingCarousel5_qrb79v.jpg" alt="Chocolate Bundt Cake"></img>
        </div>
      </div>
    </div>
    <div className="heading">
     <h1>RecipEATS!</h1>
     <h3>Find the perfect recipe for you!</h3>
    <button onClick={() => navigate(`/recipes`)}className="start">Get Started!</button>
    </div>
 </div>
  );
};

export default Landing;