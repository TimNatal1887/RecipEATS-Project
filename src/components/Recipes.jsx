import { useState, useEffect } from "react"

const URL = import.meta.env.VITE_BASE_API_URL

export default function Recipes(){
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [filterIngredient, setFilterIngredient] = useState({
        ingredient: ""
    })

    function handleChange(e) {
        setFilterIngredient({
            ...filterIngredient,
            [e.target.id]: e.target.value
        })
    } 

    function omitIngredient() {
        const filteredArray = recipes.filter(recipe => 
            recipe.ingredients.every(ingredient => !ingredient.match(filterIngredient.ingredient))
            )
        setFilteredRecipes(filteredArray)
    }
        
    useEffect(() => {
        fetch(`${URL}/recipes`)
        .then((response) => response.json())
        .then((data) => {
        setFilteredRecipes(data)
        setRecipes(data)})
    }, [])

    useEffect(() => {
        omitIngredient()
    },[filterIngredient.ingredient])
        
    return(
        <div className="recipe-list-wrapper">
            <div className="recipe-filter">
            {/* This will be where we can do a search bar or some filter for recipes */}
        <input type="text" id = "ingredient" value = {filterIngredient.ingredient} onChange={handleChange} />
            </div>
            <h2>All Recipes</h2>
            <ul>
                {/* {recipes.map(recipe => <Recipe/>)} */}
            {/* This will be where we list the recipes */}
            </ul>
        </div>
    )
}