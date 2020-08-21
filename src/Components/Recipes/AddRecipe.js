import React from "react";
import styled from "styled-components";

const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: ""
})

const Category = ["Breakfast", "Lunch", "Dinner"]

const AddRecipe = () => {

    handleChange = () => {

    }

    submit = () => {
        
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