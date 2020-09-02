import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../Utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

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


const EditRecipe = props => {
  const [localRecipe, setLocalRecipe] = useState({});
  const [editing, setEditing] = useState(false);
  const id = localStorage.getItem("id");
  const history = useHistory();
  const classes = useStyles();
  const [card, setCard] = useState({})

  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: ""
})

const [errors, setErrors] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: ""
})

  const handleEdit = (e) => {
    e.preventDefault();
    const recipe_id = localStorage.getItem("r_id")
    axiosWithAuth()
      .put(`/users/${id}/update/${recipe_id}`, localRecipe)
      .then(res => {
        console.log("SUCCESS", res);
        setEditing(false);
        history.push('/recipes')
      })
      .catch(err => console.log("ERROR", err));
  };

  const handleChanges = e => {
    setLocalRecipe({ ...localRecipe, [e.target.name]: e.target.value });
  };

  console.log("localRecipe ", localRecipe);
  return (
    <div>
                <AppBar position="static" elevation={0} className={classes.appBar}>
            </AppBar>
        <div>
        <Form onSubmit={handleEdit}>
            <Label htmlFor="title">
                Title:
                <Input type="text" id="title" name="title" value={recipe.name} onChange={handleChanges} />
                {errors.title.length > 0 ? <p classname="errors">{errors.title}</p> : null}
            </Label>
            <Label htmlFor="source">
                Source: 
                <Input type="text" id="source" name="source" value={localRecipe.source} onChange={handleChanges} />
                {errors.source.length > 0 ? <p>{errors.source}</p> : null}
            </Label>
            <Label htmlFor="ingredients">
                Ingredients:
                <Input type="text" id="ingredients" name="ingredients" value={localRecipe.ingredients} onChange={handleChanges} />
                {errors.ingredients.length > 0 ? <p>{errors.ingredients}</p> : null}
            </Label>
            <Label htmlFor="instructions">
                Instructions: 
                <Textarea type="text" id="instructions" name="instructions" value={localRecipe.instructions} onChange={handleChanges} />
                {errors.instructions.length > 0 ? <p>{errors.instructions}</p> : null}
            </Label>
            <Label htmlFor="category">
                <Select name="category" onChange={handleChanges}>
                    <option>--Please Select A Category--</option>
                    {Category.map((meal) => {
                        return <option value={meal} key={meal}>{meal}</option>
                    })}
                    {errors.category.length > 0 ? <p>{errors.category}</p> : null}
                </Select>

            </Label>
            <SubmitButton type="submit">Submit</SubmitButton>
        </Form>

    </div>
    <Link to={"/recipes"}>
        Back
    </Link>
    </div>
)
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
       recipes: state.recipes
    }
}

export default connect(
    mapStateToProps, null)(EditRecipe);