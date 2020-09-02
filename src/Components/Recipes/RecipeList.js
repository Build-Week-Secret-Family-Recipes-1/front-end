import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Nav from '../User/Nav';
import { getRecipe } from '../../Actions';
import axiosWithAuth from '../../Utils/axiosWithAuth';
import RecipeCard from './RecipeCard'

const RecipeList = props => {
    const myRecipes = [];
    const [recipe, setRecipes] = useState([])
    console.log("recipeList", recipe)
    console.log(props)

    useEffect(() => {
        const id = localStorage.getItem("id");
        // axiosWithAuth()
        // .get(`/users/${id}/recipes`)
        // .then(res=>{
        // console.log( res.data)
        // setRecipes(res.data)
        //   })
        // .catch(err=>console.log( err.message, err.response))
        props.getRecipe(id)
      }, [])


return (
    <div>
     < Nav/>
     <div className="recipe-container">
       {console.log(`recipe`, recipe)}
      {props.recipe && props.recipe.map(recipe => (
         <RecipeCard card={recipe} />
      ))}
     </div>
    </div>
)


}

const mapStateToProps = state => {
  console.log("text", state)
    return {
       recipe: state.recipes,
       token: state.token 
    }
}

export default connect(
    mapStateToProps, { getRecipe }
)(RecipeList);
