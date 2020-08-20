import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = props => {
    const { values, handleChange } = props;
    return (
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
        </Form>
    );
};

export default SignUp;