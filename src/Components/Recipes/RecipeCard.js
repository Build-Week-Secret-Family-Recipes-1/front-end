import React, { useState } from "react";
import { getRecipe } from '../../Actions'
import { connect } from "react-redux";
import styled from "styled-components";



const Card = styled.div`
    width: 50%;
    height: 200px;
    border: 2px solid black;
    margin-left: 25%;
    margin-top: 5px;
`;

const Title = styled.p`
width: 25%;
border-bottom: 1px solid black;
`;

const Source = styled.p`
width: 25%;
border-bottom: 1px solid black;
`;

const Body = styled.div`
display: flex;
margin-left: 8%;
justify-content: space-around;
`;

const Category = styled.p`
width: 25%;
`;


const RecipeCard = (props) => {
    console.log(props)

    return (
       <Card>
            <Title>Title: {props.card.title}</Title>
            <Source>Source: {props.card.source}</Source>
            <Body>
                <p>Ingredients: {props.card.ingredients}</p>
                <p>Instructions: {props.card.instructions}</p>
            </Body>
            <p>Category: {props.card.catgory}</p>
       </Card>
    )
}

export default connect(
    null, {})(RecipeCard);