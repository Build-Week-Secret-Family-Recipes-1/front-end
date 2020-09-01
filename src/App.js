import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import './App.css';
import AddRecipe from "./Components/Recipes/AddRecipe";
import RecipeList from './Components/Recipes/RecipeList';
import PrivateRoute from './Utils/PrivateRoute';
import { makeStyles } from "@material-ui/core/styles";
import WelcomePage from './Components/User/WelcomePage'


function App() {
    return (
        <Router>
        <div className="App">
        <Switch>
         <Route exact path='/' component={WelcomePage} />
         <Route path='/login' component={Login} />
         <Route path='/signup' component={Signup} />
         <PrivateRoute exact path='/recipes' component={RecipeList} />
         <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
         </Switch>
        </div>
        </Router>
    )
}

export default App;
