import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Nav from '../User/Nav';
import { getRecipe } from '../../Actions'
import RecipeCard from './RecipeCard'

const RecipeList = props => {
    const { getRecipe } = props;
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const recipeDisplay = props.recipes

    useEffect(() => {
        getRecipe()
    }, [getRecipe]);



return (
    <div>
     < Nav/>
     <div className="recipe-container">
         {filteredRecipes.map(recipe => 
         <RecipeCard recipe={recipe} />
         )}
     </div>
    </div>
)


}

const mapStateToProps = state => {
    return {
       recipe: state.recipe,
       filteredRecipes: state.filteredRecipes,
       token: state.token 
    }
}

export default connect(
    mapStateToProps, { getRecipe }
)(RecipeList);
