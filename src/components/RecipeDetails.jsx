import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./RecipeDetails.css"

const URL = import.meta.env.VITE_BASE_API_URL

export default function RecipeDetails(){
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()


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