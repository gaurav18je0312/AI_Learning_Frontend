import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterForm() {
  return (
    <>
      <div className="login-form-content">Create Account</div>
      <div className="login-form-signin">
        <div className="login-signin">Already have account?</div>
        <div className="login-signin-link">Sign in</div>
      </div>
      <div className="login-form-input">
        <Form>
          <Form.Group className="mb-2" controlId="formUserName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Class/Program</Form.Label>
            <Form.Select>
              <option>Select class</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </Form.Select>
          </Form.Group>
          <Button className="mt-2 login-form-button" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegisterForm;
