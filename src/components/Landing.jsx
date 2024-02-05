import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import About from "./About.jsx";
import "./Landing.css"
import Carousel from "./Carousel.jsx";

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
      <h1>RecipEATS!</h1>
      <h3>Find the perfect recipe for you!</h3>
      <div className="carousel">
        {/* Your Carousel component goes here */}
        <Carousel />
      </div>
      <div className="button-container">
        <Link to="/recipes" className="get-started-button">Get Started!</Link>
      </div>
    </div>
  );
  };
  
  export default Landing;

