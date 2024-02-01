import React, { useState,useEffect } from "react";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Landing from "./components/Landing"; 

const App = () => {




  return (
  <div className="wrapper">
    <h1>RecipEATS!</h1>
    <div className="recipe-body">
    </div>
    <div className="footer-body">
<Routes>
  <Route path="/" element={<Landing/>}></Route>
  <Route path="/recipes" element={<Recipes/>}></Route>
</Routes>
    </div>
  </div>
  )
};

export default App;
