import axios from 'axios';
import axiosWithAuth from '../Utils/axiosWithAuth'

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_START = 'EDIT_RECIPE_START';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const GET_RECIPES_START = 'GET_RECIPE_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPE_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const GET_TITLE_START = 'GET_TITLE_START';
export const GET_TITLE_SUCCESS = 'GET_TITLE_SUCCESS';
export const GET_TITLE_FAILURE = 'GET_TITLE_FAILURE';

const id = localStorage.getItem("id");

export const addRecipe = (newRecipe) => dispatch => {
    console.log(newRecipe);
    const id = localStorage.getItem("id");
    dispatch({ type: ADD_RECIPE_START });
    console.log(newRecipe);
    return axiosWithAuth()
        .post(`https://secretfamilyrecipesbw.herokuapp.com/api/users/${id}`, newRecipe)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: ADD_RECIPE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE, payload: err
            })
        })
}

export const getRecipe = (id) => dispatch => {
    dispatch({
        type: GET_RECIPES_START
    })
    const id = localStorage.getItem("id");
    axiosWithAuth()
        .get(`https://secretfamilyrecipesbw.herokuapp.com/api/users/${id}/recipes`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_RECIPES_SUCCESS, payload: res.data
            })
            
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPES_FAILURE, payload: err
            })
        })
}

export const editRecipe = (updatedRecipe) => dispatch => {
    dispatch({
        type: EDIT_RECIPE_SUCCESS
    })
     axiosWithAuth()
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
    dispatch({
        type: REGISTER_USER_START
    })
    axios
        .post('https://secretfamilyrecipesbw.herokuapp.com/api/auth/register', user)
        .then(res => {
            dispatch({
                type: REGISTER_USER_SUCCESS, payload: res.data
            })
            const { token, user_id } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("id", user_id);
            history.push("/recipes");
        })
        .catch(err => {
            dispatch({
                type: REGISTER_USER_FAILURE, payload: err
            })
        })
}

export const loginUser = (user, history) => dispatch => {
    dispatch({
        type: LOGIN_USER_START
    })
    axios
        .post('https://secretfamilyrecipesbw.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: res.data
            })
            const { token, user_id } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("id", user_id);
            history.push("/recipes");
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

export const getCategories = () => dispatch => {
    dispatch({
        type: GET_CATEGORIES_START
    })
    return axios
        .get(`/api/users/${id}/:category`)
        .then(res => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CATEGORIES_FAILURE, payload: err
            })
        })
}

export const getTitle = () => dispatch => {
    dispatch({
        type: GET_TITLE_START
    })
    return axios
    .get(`/api/users/${id}/recipes/:title`)
    .then(res => {
        dispatch({
            type: GET_TITLE_SUCCESS, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_TITLE_FAILURE, payload: err
        })
    })
}