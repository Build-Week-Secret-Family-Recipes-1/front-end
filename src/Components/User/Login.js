import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Login = ({ handleChange }) => {
  return (
    <Form>
      <FormWrapper>
        <h1 style={{ color: "#333355" }}>Login</h1>
        <TextField
          label="firstname"
          variant="outlined"
          onChange={handleChange}
          type="firstname"
          placeholder="First Name"
          name="firstname"
        />
        <TextField
          label="lastname"
          variant="outlined"
          onChange={handleChange}
          type="lastname"
          placeholder="Last Name"
          name="lastname"
        />
        <TextField
          label="email"
          variant="outlined"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
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
  );
};

export default Login;