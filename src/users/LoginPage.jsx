import React from "react";
import "./LoginPage.css";
import logo from "../assets/logo3.jpeg";
import LoginPageImages from "../components/LoginPageImages";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import TypingPattern from "../utils/TypePattern";

function LoginPage({ type }) {
  return (
    <div className="login-container">
      <div className="row login-content">
        <div className="col-6 login-form">
          <div className="login-header">
            <div className="login-logo">
              <img src={logo} alt="logo" width={"50px"} />
            </div>
            <div className="login-title">
              {/* Ai.Text<b>book</b> */}
              <TypingPattern />
            </div>
          </div>
          {type === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
        <div className="col-6 login-image">
          <LoginPageImages />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
