import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { addRecipe, getCategories } from "../../Actions"
import { connect } from 'react-redux';
import * as yup from "yup";
import RecipeCard from "./RecipeCard";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://businessmirror.com.ph/wp-content/uploads/2020/05/AustralianGrapes001-V2-1.jpg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      height: `150px`
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


const Category = ["Breakfast", "Lunch", "Dinner"];

const Form = styled.form`
display: flex;
flex-direction: column;
margin: 25px auto 25px auto;
`;

const Label = styled.label`
margin: 5px auto;
`;

const Input = styled.input`
margin-left: 2%;
`;

const Textarea = styled.textarea`
margin-left: 2%;
`;

const Select = styled.select`
margin-bottom: 5px;
`;

const SubmitButton = styled.button`
width: 5%;
margin-left: 47.5%;
height: 40px;
`;


const AddRecipe = (props) => {
    const [card, setCard] = useState({})
    const classes = useStyles();
    const history = useHistory();
    
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
        setRecipe(NewRecipe);
    }

    const [errors, setErrors] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })


    const submit = (e) => {
        e.preventDefault();
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
            <Form onSubmit={submit}>
                <Label htmlFor="title">
                    Title:
                    <Input type="text" id="title" name="title" value={recipe.name} onChange={handleChange} />
                    {errors.title.length > 0 ? <p classname="errors">{errors.title}</p> : null}
                </Label>
                <Label htmlFor="source">
                    Source: 
                    <Input type="text" id="source" name="source" value={recipe.source} onChange={handleChange} />
                    {errors.source.length > 0 ? <p>{errors.source}</p> : null}
                </Label>
                <Label htmlFor="ingredients">
                    Ingredients:
                    <Input type="text" id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
                    {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null}
                </Label>
                <Label htmlFor="instructions">
                    Instructions: 
                    <Textarea type="text" id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} />
                    {errors.instructions.length > 0 ? <p>{errors.instructions}</p> : null}
                </Label>
                <Label htmlFor="category">
                    <Select name="category" onChange={handleChange}>
                        <option>--Please Select A Category--</option>
                        {Category.map((meal) => {
                            return <option value={meal} key={meal}>{meal}</option>
                        })}
                        {errors.category.length > 0 ? <p>{errors.category}</p> : null}
                    </Select>

                </Label>
                <SubmitButton type="submit" onClick={() => {history.goBack("/recipes")}}>Add Recipe</SubmitButton>
            </Form>

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