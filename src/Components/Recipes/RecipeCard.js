import React, { useState } from "react";




const RecipeCard = (props) => {
    const [card, setCard] = useState({})
   

    return (
       <div>
            <p>Title: {props.recipe.title}</p>
            <p>Source: {props.recipe.source}</p>
            <p>Ingredients: {props.recipe.ingredients}</p>
            <p>Instructions: {props.recipe.instructions}</p>
            <p>Category: {props.recipe.catgory}</p>
       </div>
    )
}

export default RecipeCard;