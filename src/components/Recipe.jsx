import React from "react";

const Recipe = ({ recipe }) => {
    return(
        <div className="recipe-page">
                <h2>{recipe.dishName}</h2>
                <img src={recipe.dishImage}></img>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <p>{recipe.ingredients}</p>
                </div>
            </div>
    )
}