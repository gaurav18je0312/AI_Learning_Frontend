import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google_logo from "../assets/google_logo.png";

function LoginForm() {
  return (
    <>
      <div className="login-form-content">Sign in to your account</div>
      <div className="login-form-signin">
        <div className="login-signin">Not a member?</div>
        <div className="login-signin-link">Sign up</div>
      </div>
      <div className="login-form-input">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
            <div className="login-signin-link">Forget Password?</div>
          </Form.Group>
          <Button className="login-form-button" type="submit">
            Sign in
          </Button>
        </Form>
        <div className="row login-page-sso-text">
          <div className="col-4">
            <hr />
          </div>
          <div className="col-4 p-0">Or continue with</div>
          <div className="col-4">
            <hr />
          </div>
        </div>
        <div className="login-page-sso-icons">
          <img src={google_logo} alt="google logo" /> Google
        </div>
      </div>
    </>
  );
}

export default LoginForm;
