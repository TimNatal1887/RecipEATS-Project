import React, { useState,useEffect } from "react";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Recipes from "./components/Recipes";

const App = () => {




  return (
  <div className="wrapper">
    <h1>RecipEATS!</h1>
    <div className="recipe-body">
    <Recipes/>
    </div>
    <div className="footer-body">

    </div>
  </div>
  )
};

export default App;
