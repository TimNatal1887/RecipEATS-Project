import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import "./Recipe.css"

const URL= import.meta.env.VITE_BASE_API_URL
const Recipe = ({ recipe }) => {
  const [reviews, setReviews] = useState([]);
  const ingredientString = recipe.ingredients.reduce((ingredientList, ingredient,index)=>{
    const formattedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);

    if(index === recipe.ingredients.length - 1){
      ingredientList += `${formattedIngredient}.`
    }else{
      ingredientList += `${formattedIngredient}, `
    }
    return ingredientList
  },"")

  const rating = reviews.reduce((averageRating,review,index)=>{
    if(index === reviews.length - 1){
      averageRating += review.rating
      averageRating /= reviews.length
    }else{
      averageRating += review.rating
    }
    return averageRating
  },0)
  
  const fetchReviews = async () => {
    try {
      const response = await fetch(
          `${URL}/reviews?dishId=${recipe.id}`
          );

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, [recipe.id]);



  return (
    <div className="recipe-page">
      <h2>{recipe.dishName}</h2>
      <Link to={`/recipes/${recipe.id}`}>
      <img src={recipe.dishImage} alt={recipe.dishName} />
      </Link>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <p>{ingredientString}</p>
        <br />
      </div>
    </div>
  );
};

export default Recipe;