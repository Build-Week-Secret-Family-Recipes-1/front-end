import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import './App.css';

function App(props) {
    return (
        <Router>
        <div className="App">
         <Route path='/login' component={Login} />
         <Route path='/signup' component={Signup} />
        </div>
        </Router>
    )
}

export default App;
