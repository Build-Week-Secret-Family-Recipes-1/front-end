import React from 'react';
import { withFormik, Form } from "formik";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import styled from "styled-components";
import { registerUser } from "../../Actions";
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
            label="First Name"
            onChange={handleChange}
            type="fname"
            placeholder="First Name"
            name="fname"
            />
            <TextField
             label="Last Name"
             onChange={handleChange}
             type="lname"
             placeholder="Last Name"
             name="lname"
            />
            <TextField
             label="Email"
             onChange={handleChange}
             type="email"
             placeholder="Email"
             name="email"
            />
            <TextField
            label="Username"
            onChange={handleChange}
            type="username"
            placeholder="Username"
            name="username"
            />
            <TextField
             label="Password"
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
  mapPropsToValues({ fname, lname, email, username, password}) {
      return {
          fname: fname || "",
          lname: lname || "",
          email: email || "",
          username: username || "",
          password: password || ""
      };
  },
  validationSchema: Yup.object().shape({
      fname: Yup.string("First name is required")
      .required(),
      lname: Yup.string("Last name is required")
      .required(),
      email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
      username: Yup.string()
      .required("Username is required"),
      password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required()
  }),
  handleSubmit(values, { props }) {
      props.registerUser( values, props.history);
  }
})(SignUp);


export default connect(
  null,
  { registerUser }
)(FormikApp);