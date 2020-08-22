import React, { useState } from "react";
import AddRecipe from "./AddRecipe";



const RecipeCard = () => {
    const [card, setCard] = useState({})
   

    return (
       <div>
          <AddRecipe card={card} setCard={setCard} /> 
       </div>
    )
}

export default RecipeCard;