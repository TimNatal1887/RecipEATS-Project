import { useState, useEffect } from "react"
import Recipe from "./Recipe";

const URL = import.meta.env.VITE_BASE_API_URL

export default function Recipes(){
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)
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
        if(filterIngredient.ingredient){
            const filteredArray = recipes.filter(recipe => recipe.ingredients.every(ingredient => !ingredient.match(filterIngredient.ingredient)))
            setFilteredRecipes(filteredArray)
        }else{
            setFilteredRecipes(recipes)
        }
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
                {console.log()}
            {/* This will be where we can do a search bar or some filter for recipes */}
            <label htmlFor="ingredient-search">
                Search for recipes NOT including this ingredient
                <input type="text" id = "ingredient" name="ingredient-search" value = {filterIngredient.ingredient} onChange={handleChange} />
            </label>
            </div>
            <h2>All Recipes</h2>
            <ul>
                {filteredRecipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)}
            {/* This will be where we list the recipes */}
            </ul>
        </div>
    )
}