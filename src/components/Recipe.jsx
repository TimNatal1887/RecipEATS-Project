import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL= import.meta.env.VITE_BASE_API_URL
const Recipe = ({ recipe }) => {
  const [reviews, setReviews] = useState([]);

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

  const rating = reviews.reduce((averageRating,review,index)=>{
    if(index === reviews.length - 1){
      averageRating += review.rating
      averageRating /= reviews.length
    }else{
      averageRating += review.rating
    }
    return averageRating
  },0)


  return (
    <div className="recipe-page">
      <h2>{recipe.dishName}</h2>
      <img src={recipe.dishImage} alt={recipe.dishName} />
      <div className="ingredients">
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>

      <div className="reviews">
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>Rating: {rating}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;