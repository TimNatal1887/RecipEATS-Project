import { useNavigate } from 'react-router-dom';
import React from 'react';
import "./Landing.css"
import Carousel from "./Carousel.jsx";

const Landing = () => {
  const navigate = useNavigate()
  
   return (
    <div className="landing">
        <div className="about">
         <About />
        </div>
        <Carousel/>
    <div className="heading">
     <h1>RecipEATS!</h1>
     <h3>Find the perfect recipe for you!</h3>
    <button onClick={() => navigate(`/recipes`)}className="start">Get Started!</button>
    </div>
 </div>
  );
  };
  
  export default Landing;

