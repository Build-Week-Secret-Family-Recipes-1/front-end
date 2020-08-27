import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { addRecipe, getCategories } from "../../Actions"
import { connect } from 'react-redux';
import * as yup from "yup";

import RecipeCard from "./RecipeCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://hofmannsausage.com/pub/media/wysiwyg/4Franks_Slider.jpg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      height: `350px`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));
=======
import RecipeCard from "./RecipeCard"
import { makeStyles } from "@material-ui/core/styles";


const Category = ["Breakfast", "Lunch", "Dinner"]

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSaeoI_FMGHqvcU5ewBh-b06h2KOelqeXDiA&usqp=CAU)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));

const AddRecipe = (props) => {
    const [card, setCard] = useState({})
    const classes = useStyles();
    
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
        // validateChange(e);
        setRecipe(NewRecipe);
    }

    // const recipeSchema = yup.object().shape({
    //     title: yup.string().required("Please enter a title."),
    //     source: yup.string().required("Please enter a source."),
    //     ingredients: yup.string().required("Please enter ingredients."),
    //     instructions: yup.string.required("Please enter the instructions."),
    //     category: yup.string().required("A category is required."),
    // })

    const [errors, setErrors] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })

    // const validateChange = (e) => {
    //     yup
    //     .reach(recipeSchema, e.target.name)
    //     .validate(e.target.value)
    //     .then((valid) => {
    //         setErrors({
    //             ...errors,
    //             [e.target.errors]: ""
    //         })
    //     })
    //     .catch((err) => {
    //         setErrors({
    //             ...errors,
    //             [e.target.name]: err.errors[0]
    //         })
    //     })
    // }

    const submit = (e) => {
        e.preventDefault();
        // const ingredientsArray = recipe.ingredients.split("\n");
        // const instructionsArray = recipe.ingredients.split("\n");
        // setRecipe({
        //     ...recipe,
        //     ingredients: ingredientsArray,
        //     instructions: instructionsArray
        // });
        setCard(recipe);
        props.addRecipe(recipe)
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
                    <AppBar position="static" elevation={0} className={classes.appBar}>
                </AppBar>
            <div>
            <form onSubmit={submit}>
                <label htmlFor="title">
                    Title:
                    <input type="text" id="title" name="title" value={recipe.name} onChange={handleChange} />
                    {errors.title.length > 0 ? <p classname="errors">{errors.title}</p> : null}
                </label>
                <label htmlFor="source">
                    Source: 
                    <input type="text" id="source" name="source" value={recipe.source} onChange={handleChange} />
                    {errors.source.length > 0 ? <p>{errors.source}</p> : null}
                </label>
                <label htmlFor="ingredients">
                    Ingredients:
                    <input type="text" id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
                    {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null}
                </label>
                <label htmlFor="instructions">
                    Instructions: 
                    <textarea type="text" id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} />
                    {errors.instructions.length > 0 ? <p>{errors.instructions}</p> : null}
                </label>
                <label htmlFor="category">
                    <select onChange={handleChange}>
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
            <RecipeCard card={card} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(
    mapStateToProps, { addRecipe, getCategories })(AddRecipe);