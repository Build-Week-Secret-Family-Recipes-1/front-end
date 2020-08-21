import React, { useState } from "react";
// import styled from "styled-components";


const Category = ["Breakfast", "Lunch", "Dinner"]

const AddRecipe = () => {
    
    const [recipe, setRecipe] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })
    const handleChange = (e) => {
        const NewRecipe = {
            ...recipe,
            [e.target.name]: e.target.value
        }
        setRecipe(NewRecipe);
    }

    const submit = (e) => {
        e.preventDefault();
        // const ingredientsArray = recipe.ingredients.split("\n");
        // const instructionsArray = recipe.ingredients.split("\n");
        // setRecipe({
        //     ...recipe,
        //     ingredients: ingredientsArray,
        //     instructions: instructionsArray
        // });


    }

    return (
        <div>
            <div>
            <form>
                <label htmlFor="title">
                    Title:
                    <input type="text" id="title" name="title" value={recipe.name} onChange={handleChange} />
                </label>
                <label htmlFor="source">
                    Source: 
                    <input type="text" id="source" name="source" value={recipe.source} />
                </label>
                <label htmlFor="ingredients">
                    Ingredients:
                    <input type="text" id="ingredients" name="ingredients" value={recipe.ingredients} />
                </label>
                <label htmlFor="instructions">
                    Instructions: 
                    <textarea type="text" id="instructions" name="instructions" value={recipe.instructions} />
                </label>
                <label htmlFor="category">
                    <select>
                        <option>--Please Select A Category--</option>
                        {Category.map((meal) => {
                            return <option value={meal} key={meal}>{meal}</option>
                        })}
                    </select>

                </label>
            </form>
        </div>
        </div>
    )
}

export default AddRecipe;