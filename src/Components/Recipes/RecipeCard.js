import React, { useState } from "react";
import axiosWithAuth from "../../Utils/axiosWithAuth"
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import styled from "styled-components";
import EditRecipe from "./EditRecipe"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../App.css'



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
    console.log("thrown text", props)
    const history = useHistory();
    const id = localStorage.getItem("id");


    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .delete(`/users/${id}/delete/${props.card.r_id}`)
          .then(res => {
            console.log( res);
            history.push("/recipes");
        })
          .catch(err =>
            console.log( err)
        );
    };


    return (
       <Card>
            <Title>Title: {props.card.title}</Title>
            <Source>Source: {props.card.source}</Source>
            <Body>
                <p>Ingredients: {props.card.ingredients}</p>
                <p>Instructions: {props.card.instructions}</p>
            </Body>
            <p>Category: {props.card.category}</p>
            <div className="edit-button">
            <Link to={`/edit-recipe/${id}`}>
              <Button onClick={() => localStorage.setItem("r_id", props.card.r_id )}>
                 Edit
              </Button>
            </Link>
                </div>
                <div className="delete-button">
                <Button
                 variant="outlined"
                 onClick={handleDelete}
                >Delete
                </Button>
            </div>
       </Card>
    )
}

export default connect(
    null, {})(RecipeCard);