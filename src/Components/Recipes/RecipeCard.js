import React, { useState } from "react";
import { getRecipe } from '../../Actions'
import { connect } from "react-redux";


const RecipeCard = (props) => {
    console.log(props)

    return (
       <div>
            <p>Title: {props.card.title}</p>
            <p>Source: {props.card.source}</p>
            <p>Ingredients: {props.card.ingredients}</p>
            <p>Instructions: {props.card.instructions}</p>
            <p>Category: {props.card.catgory}</p>
       </div>
    )
}

export default connect(
    null, {})(RecipeCard);