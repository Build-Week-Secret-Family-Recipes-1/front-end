import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import RecipeCard from "./RecipeCard"

const Category = ["Breakfast", "Lunch", "Dinner"]

const AddRecipe = (props) => {
    
    const [recipe, setRecipe] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })
    const handleChange = (e) => {
        e.persist();
        const NewRecipe = {
            ...recipe,
            [e.target.name]: e.target.value
        }
        validateChange(e);
        setRecipe(NewRecipe);
    }

    const recipeSchema = yup.object().shape({
        title: yup.string().required("Please enter a title."),
        source: yup.string().required("Please enter a source."),
        ingredients: yup.string().required("Please enter ingredients."),
        instructions: yup.string.required("Please enter the instructions."),
        category: yup.string().required("A category is required."),
    })

    const [errors, setErrors] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })

    const validateChange = (e) => {
        yup
        .reach(recipeSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrors({
                ...errors,
                [e.target.errors]: ""
            })
        })
        .catch((err) => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
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
        props.setCard(recipe);
        setRecipe({
            title: "",
            source: "",
            ingredients: "",
            instructions: "",
            category: ""
        })

    }

    return (
        <div>
            <div>
            <form onSubmit={submit}>
                <label htmlFor="title">
                    Title:
                    <input type="text" id="title" name="title" value={recipe.name} onChange={handleChange} />
                    {errors.title.length > 0 ? <p classname="errors">{errors.title}</p> : null}
                </label>
                <label htmlFor="source">
                    Source: 
                    <input type="text" id="source" name="source" value={recipe.source} />
                    {errors.source.length > 0 ? <p>{errors.source}</p> : null}
                </label>
                <label htmlFor="ingredients">
                    Ingredients:
                    <input type="text" id="ingredients" name="ingredients" value={recipe.ingredients} />
                    {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null}
                </label>
                <label htmlFor="instructions">
                    Instructions: 
                    <textarea type="text" id="instructions" name="instructions" value={recipe.instructions} />
                    {errors.instructions.length > 0 ? <p>{errors.instructions}</p> : null}
                </label>
                <label htmlFor="category">
                    <select>
                        <option>--Please Select A Category--</option>
                        {Category.map((meal) => {
                            return <option value={meal} key={meal}>{meal}</option>
                        })}
                        {errors.category.length > 0 ? <p>{errors.category}</p> : null}
                    </select>

                </label>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
            <RecipeCard />
        </div>
    )
}

export default AddRecipe;