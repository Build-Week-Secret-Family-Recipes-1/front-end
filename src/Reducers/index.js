import {
    REGISTER_USER_FAILURE,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    SEARCH_RECIPE,
    EDIT_RECIPE_START,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAILURE,
} from "../Actions";

const initialState = {
    isLoggedIn: false,
    registeringUser: false,
    logginIn: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES_START:
            return {
                ...state,
                fetchingRecipes: true
            }
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                fetchingRecipes: false,
                recipes: action.payload
            }
        case GET_RECIPES_FAILURE:
            return {
                ...state,
                fetchingRecipes: false,
                error: action.payload
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case REGISTER_USER_START:
            return {
                ...state,
                registeringUser: true

            }
        case REGISTER_USER_SUCCESS:
            localStorage.setItem("userToken", action.payload.token);
            return {
                ...state,
                registeringUser: false,
                isLoggedIn: true
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registeringUser: false,
                error: action.payload
            }
        case EDIT_RECIPE_START:
            return {
                ...state,
                editingRecipe: true
            }
        case EDIT_RECIPE_SUCCESS:
            return {
                ...state,
                editingRecipe: false
            }
        case EDIT_RECIPE_FAILURE:
            return {
                ...state,
                editingRecipe: false
            }
            case LOGIN_USER_START:
                return {
                    ...state,
                    loggingIn: true
            }
            case LOGIN_USER_SUCCESS: 
                localStorage.setItem("userToken", action.payload.token);
                return {
                    ...state,
                    loggingIn: false,
                    isLoggedIn: true
            }
            case LOGIN_USER_FAILURE:
                return {
                    ...state,
                    loggingIn: false
    
            }

            default:
                return state;
    }
}

export default reducer;