import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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
            <div className="recipe-info">
                <h2>{recipe.dishName}</h2>
                <img src={recipe.dishImage}/>
                <p>Country of Origin: {recipe.countryOfOrigin}</p>
                <p>Vegetarian: {recipe.isVegetarian ? "✅":"❌"} </p>
                <p>Vegan: {recipe.isVegan ? "✅":"❌"}</p>
                <p>Gluten Free: {recipe.isGlutenFree ? "✅":"❌"}</p>
                <p>Spice Level: {recipe.extraInfo.spiceLevel}</p>
            </div>
            <div className="recipe-instructions">
                <p> Meal Prep: {recipe.extraInfo.prepTime}</p>
                <p>Instructions: {recipe.extraInfo.preparation}</p>
            </div>
           <Link to={`/recipes/${id}/review`}>
            <button> Add a review</button>
           </Link>
        </div>
    )
}