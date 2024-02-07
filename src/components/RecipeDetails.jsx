import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./RecipeDetails.css"
import {destroyReview} from "../api/fetch"

const URL = import.meta.env.VITE_BASE_API_URL

export default function RecipeDetails(){
    const [recipe, setRecipe] = useState({})
    const [reviews, setReviews] = useState([]);
    const {id} = useParams()

   
    function handleDeleteReview(reviewId){
        destroyReview(reviewId)
        .then((response)=>window.location.reload())
    }

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
    


    useEffect(()=>{
        fetch(`${URL}/recipes/${id}`)
        .then((response)=>response.json())
        .then((data)=> setRecipe(data))
    },[id])

    if(Object.keys(recipe).length < 1) return null

    return (
        <div className="recipe-detail-wrapper">
            <div className="recipe-detail-body">
                <div className="recipe-info">
                    <div className="recipe-head">
                        <div className="recipe-header">
                            <h2>{recipe.dishName}</h2>
                            <p>Country of Origin: {recipe.countryOfOrigin}</p>
                            <p>Vegetarian: {recipe.isVegetarian ? "✅":"❌"} </p>
                            <p>Vegan: {recipe.isVegan ? "✅":"❌"}</p>
                            <p>Gluten Free: {recipe.isGlutenFree ? "✅":"❌"}</p>
                            <p>Spice Level: {recipe.extraInfo.spiceLevel}</p>
                            <div className="recipe-ingredients">
                                <ul> 
                                    <h4>Ingredients Needed:</h4>      
                                    {recipe.ingredients.map(ingredient=>{
                                        return (
                                            <li>{ingredient}</li>
                                        )   
                                    })}
                                </ul>
                            </div>
                        </div>
                        <img src={recipe.dishImage}/>
                    </div>
                </div>
                    <div className="recipe-prep-wrapper">
                        <div className="review-button-wrapper">
                            <div className="reviews">
                                <h3>Reviews</h3>
                                <ul>
                                {reviews.map((review) => (
                                    <li key={review.id}>
                                        <p>{review.name} says: {review.comment}</p>
                                        <p>Rating: {"⭐️".repeat(review.rating)}
                                        <button className="delete-button" onClick={()=>handleDeleteReview(review.id)}>Remove</button>
                                        <Link to={`/recipes/${id}/review/${review.id}/edit`}>
                                        <button className="edit-button">Edit</button>
                                        </Link>
                                        </p>
                                    </li>
                                ))}   
                                </ul>
                            </div>
                            <Link  className="button-to-review" to={`/recipes/${id}/review`}>
                                <button> Add Review</button>
                            </Link>
                        </div>
                        <div className="recipe-prep">
                            <p> Meal Prep: {recipe.extraInfo.prepTime}</p>
                            <p>Instructions: {recipe.extraInfo.preparation}</p>
                        </div>
                    </div> 
            </div>
        </div>
    )
}