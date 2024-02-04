import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const URL = import.meta.env.VITE_BASE_API_URL

export default function RecipeDetails(){
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()


    useEffect(()=>{
        fetch(`${URL}/recipes/${id}`)
        .then((response)=>response.json())
        .then((data)=> setRecipe(data))
    },[id])
    
    return (
        <div className="recipe-detail-wrapper">
            <h2>{recipe.dishName}</h2>
        </div>
    )
}