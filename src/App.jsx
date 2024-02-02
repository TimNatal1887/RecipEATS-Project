import React, { useState,useEffect } from "react";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import ReviewsForm from "./components/ReviewsForm";
// import Landing from "./components/Landing"
// import Recipe from "./components/Recipe"

const App = () => {




  return (
  <div className="wrapper">
    <h1>RecipEATS!</h1>
    <div className="recipe-body">
    <Routes>
      {/* The commented out Route components can be uncommented when the 2 components are ready */}

      {/* <Route path="/" element={<Landing/>}/>*/}
      <Route path="/recipes" element={<Recipes/>}>
        {/* <Route path=":id" element={<Recipe/>}></Route> */}
        <Route path=":id/addreview" element={<ReviewsForm/>}/>
      </Route>
    </Routes>
    </div>
    <div className="footer-body">

    </div>
  </div>
  )
};

export default App;
