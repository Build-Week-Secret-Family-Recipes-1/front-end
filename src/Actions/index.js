import axios from 'axios';
import axiosWithAuth from '../Utils/axiosWithAuth'

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_START = 'EDIT_RECIPE_START';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';

export const GET_RECIPE_START = 'GET_RECIPE_START';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SEARCH_RECIPE = 'SEARCH_RECIPE';

const api = 'https://secretfamilyrecipesbw.herokuapp.com/api'

// export const addRecipe = (newRecipe) => {
//     dispatch({ type: ADD_RECIPE_START });
//     return axios
//     .post(api + )
// }

export const getRecipe = () => dispatch => {
    dispatch({
        type: GET_RECIPE_START
    })
    return axios
        .get('https://secretfamilyrecipesbw.herokuapp.com/api/users/:id/recipes')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_RECIPE_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_FAILURE, payload: err
            })
        })
}

export const editRecipe = (updatedRecipe) => dispatch => {
    dispatch({
        type: EDIT_RECIPE_SUCCESS
    })
    return axios
    .put('https://secretfamilyrecipesbw.herokuapp.com/api/users/update/:r_id', updatedRecipe)
    .then(res => {
        dispatch({
            type: EDIT_RECIPE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: EDIT_RECIPE_FAILURE, payload: err
        })
    })
}

export const registerUser = (user, history) => dispatch => {
    console.log(user)
    axios
      .post( api + `auth/register`, user)
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