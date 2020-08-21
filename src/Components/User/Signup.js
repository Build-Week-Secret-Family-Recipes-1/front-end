import React from 'react';
import { withFormik, Form } from "formik";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
background-image: url('https://digitalmarketing.blob.core.windows.net/11243/images/items/image534760.jpg');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
height: 280px;
`;

const Login = styled.div`
text-align: center;
display: inline-flex;
text-decoration: none;
`

const SignUp = props => {
    const { values, handleChange } = props;
    return (
      <div>
        <Banner/>
        <Form>
            <FormWrapper>
            <h1>Create an Account</h1>
            <TextField
            label="firstname"
            onChange={handleChange}
            type="firstname"
            placeholder="First Name"
            name="firstname"
            />
            <TextField
             label="lastname"
             onChange={handleChange}
             type="lastname"
             placeholder="Last Name"
             name="lastname"
            />
            <TextField
             label="email"
             onChange={handleChange}
             type="email"
             placeholder="Email"
             name="email"
            />
            <TextField
             label="password"
             onChange={handleChange}
             type="password"
             placeholder="Password"
             name="password"
            />
            <ButtonWrapper>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </ButtonWrapper>
        </FormWrapper>
        <div>
          <Login>
        <p>Already a member?</p>
        <Link to="/login">
          <p>Login</p>
        </Link>
        </Login>
        </div>
        </Form>
        </div>
    );
};

const FormikApp = withFormik({
  mapPropsToValues({ username, password}) {
      return {
          username: username || "",
          password: password || ""
      };
  },
  validationSchema: Yup.object().shape({
      username: Yup.string()
      .required(),
      password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required()
  }),
  handleSubmit(values, { props }) {
      props.registerUser( values, props.history);
  }
})(SignUp);


export default FormikApp