import React from "react";
import { withFormik, Form } from "formik";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../Actions";
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
background-image: url('https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/inside_jersey2/photo/2018/05/02/mediterranean-style-food-background-fish-vegetables-herbs-chickpeas-olives-cheese-on-grey-background-top-view-healthy-food-concept-flat-lay-541be1311fbc65ea.jpg');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
height: 280px;
`;

const Back = styled.div`
margin-left: -10px;
text-decoration: none;
`;



const Login = ({ handleChange }) => {
  return (
    <div>
      <Banner/>
    <Form>
      <FormWrapper>
        <h1>Login</h1>
        <TextField
          label="username"
          variant="outlined"
          onChange={handleChange}
          type="username"
          placeholder="Username"
          name="username"
        />
        <TextField
          label="password"
          variant="outlined"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />{" "}
        <ButtonWrapper>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Form>
    <Back>
      <Link to='/'>
        Back
      </Link>
      </Back>
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username|| "",
      password: password || ""
    };
  },
  handleSubmit(values, { props }) {
    props.loginUser(values, props.history);
  }
})(Login);

export default connect(
  null,
  { loginUser }
)(FormikApp);