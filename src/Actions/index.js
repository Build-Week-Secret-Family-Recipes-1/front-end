import axios from 'axios';
import axiosWithAuth from '../Utils/axiosWithAuth'

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const registerUser = (user, history) => dispatch => {
    console.log(user)
    axios
      .post(`https://secretfamilyrecipesbw.herokuapp.com/api/auth/register`, user)
      .then(res => {
          console.log(res.data)
        const { token, user } = res.data;
        localStorage.setItem("token", token);
            history.push("/");
      })
      .catch(err => {
        console.log("Error on registration", err);
        dispatch({ type: REGISTER_USER_FAILURE, payload: err });
      });
  };

export const loginUser = (user) => dispatch => {
    dispatch({
        type: LOGIN_USER_START
    })
    return axios
        .post('https://secretfamilyrecipesbw.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_USER_FAILURE, payload: err
            })
        })
}

export const search = (searchString, recipes) => {
    searchString= searchString.toLowerCase();
    let filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchString) || recipe.category.toLowerCase().includes(searchString))

    return {
        type: SEARCH_RECIPE,
        payload: filteredRecipes
    }
}