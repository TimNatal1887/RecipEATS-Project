import React, { useState,useEffect } from "react";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import ReviewsForm from "./components/ReviewsForm";
import Landing from "./components/Landing"
import RecipeDetails from "./components/RecipeDetails"
import Header from "./components/Header";
import About from "./components/About";
import ReviewsEditForm from "./components/ReviewsEditForm";


const App = () => {




  return (
  <div className="wrapper">
    <Header/>
    <div className="recipe-body">
    <Routes>
      {/* The commented out Route components can be uncommented when the 2 components are ready */}
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/recipes">
        <Route index element={<Recipes/>}></Route>
        <Route path=":id" element={<RecipeDetails/>}></Route>
        <Route path=":id/review" element={<ReviewsForm/>}/>
        <Route path=":id/review/:reviewId/edit" element={<ReviewsEditForm/>}/>
      </Route>
    </Routes>
    </div>
  </div>
  )
};

export default App;
