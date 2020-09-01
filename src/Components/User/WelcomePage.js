import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Signup from '../User/Signup';
import '../../App.css'

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundImage: `url(https://suindependent.com/wp-content/uploads/2018/11/cranberries.jpg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
width: 33%;
margin-left: 33%;
text-align: center;
margin-top: 20px;
padding: 4px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Banner = styled.div`
background-image: url('https://www.tripsavvy.com/thmb/cL5y0pb1CT-F2yuT8B46aBUw1TI=/1500x1000/filters:fill(auto,1)/GettyImages-685973828-5b955b5a4cedfd0025570465.jpg');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
border-top: 3px solid black;
height: 280px;
`;

const Back = styled.div`
margin-left: -10px;
text-decoration: none;
`;



function WelcomePage() {
    const classes = useStyles();

  return (
    <div className="welcome">
        <h1>Secret Family Recipes</h1>
      <Banner />
      <FormWrapper>
        <ButtonWrapper>
          <h1>Looking for a place to store your recipes? Look no further!</h1>
        </ButtonWrapper>
        <Link to='/signup'>
            <Button
                color="primary"
                variant="contained"
                className={classes.link}
             >
            Signup
            </Button>
            </Link>
            <a href='https://familyrecipes111.netlify.app'>Learn More!</a>
      </FormWrapper>
    </div>
  );
};

export default WelcomePage