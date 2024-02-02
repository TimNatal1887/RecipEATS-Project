import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL= import.meta.env.VITE_BASE_API_URL
const Recipe = ({ recipe }) => {
  const [reviews, setReviews] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
            `${URL}/reviews?dishId=${recipeId}`
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

    fetchReviews();
  }, [recipeId]);

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
            <li key={review.id}>{review.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;