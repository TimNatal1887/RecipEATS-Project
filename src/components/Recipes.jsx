import { useState, useEffect } from "react"

const URL = import.meta.env.VITE_BASE_API_URL

export default function Recipes(){
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      fetch(`${URL}/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
    }, [])
    return(
        <div className="recipe-list-wrapper">
            {console.log(recipes)}
            <div className="recipe-filter">
            {/* This will be where we can do a search bar or some filter for recipes */}

            </div>
            <h2>All Recipes</h2>
            <ul>
            {/* This will be where we list the recipes */}
            </ul>
        </div>
    )
}