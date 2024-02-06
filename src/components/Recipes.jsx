import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./Recipes.css";

const URL = import.meta.env.VITE_BASE_API_URL;

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filterIngredient, setFilterIngredient] = useState({
    ingredient: "",
  });
  const [toggleVegan, setToggleVegan] = useState(false);
  const [toggleVegetarian, setToggleVegetarian] = useState(false);
  const [toggleGluten, setToggleGluten] = useState(false);

  function handleChange(e) {
    setFilterIngredient({
      ...filterIngredient,
      [e.target.id]: e.target.value,
    });
  }

  function handleToggleChange(e) {
    const toggleName = e.target.name;
    const toggleValue = e.target.checked;

    switch (toggleName) {
      case "vegan":
        setToggleVegan(toggleValue);
        break;
      case "vegetarian":
        setToggleVegetarian(toggleValue);
        break;
      case "gluten":
        setToggleGluten(toggleValue);
        break;
      default:
        break;
    }
  }

  function omitIngredient() {
    const filteredArray = recipes.filter((recipe) => {
      const ingredientMatch =
        !filterIngredient.ingredient ||
        (filterIngredient.ingredient.match(/^[a-zA-Z]+$/) &&
          recipe.ingredients.every(
            (ingredient) =>
              !ingredient.toLowerCase().match(filterIngredient.ingredient.toLowerCase())
          ));

      const veganMatch = !toggleVegan || recipe.isVegan;
      const vegetarianMatch = !toggleVegetarian || recipe.isVegetarian;
      const glutenMatch = !toggleGluten || recipe.isGlutenFree;

      return ingredientMatch && veganMatch && vegetarianMatch && glutenMatch;
    });

    setFilteredRecipes(filteredArray);
  }

  useEffect(() => {
    fetch(`${URL}/recipes`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredRecipes(data);
        setRecipes(data);
      });
  }, []);

  useEffect(() => {
    omitIngredient();
  }, [filterIngredient.ingredient, toggleVegan, toggleVegetarian, toggleGluten]);

  return (
    <div className="recipe-list-wrapper">
      <div className="recipe-filter">
        {/* This will be where we can do a search bar or some filter for recipes */}
        <label htmlFor="ingredient-search">
          Search for recipes NOT including this ingredient
          <input
            type="text"
            id="ingredient"
            name="ingredient-search"
            value={filterIngredient.ingredient}
            onChange={handleChange}
          />
        </label>
        <div className="toggle-wrapper">
        <label className="toggle-label">
          Vegan
          <input
            className="toggle-input"
            type="checkbox"
            name="vegan"
            checked={toggleVegan}
            onChange={handleToggleChange}
          />
        </label>

        <label className="toggle-label">
          Vegetarian
          <input
            className="toggle-input"
            type="checkbox"
            name="vegetarian"
            checked={toggleVegetarian}
            onChange={handleToggleChange}
          />
        </label>

        <label className="toggle-label">
          Gluten-Free
          <input
            className="toggle-input"
            type="checkbox"
            name="gluten"
            checked={toggleGluten}
            onChange={handleToggleChange}
          />
        </label>

        </div>
        {/* Toggle buttons for vegan, vegetarian, and gluten */}
      </div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
        {/* This will be where we list the recipes */}
      </ul>
    </div>
  );
}
