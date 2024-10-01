import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/logo3.jpeg";
// import { useNavigate } from "react-router-dom";
import LoginPageImages from "../components/LoginPageImages";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <div className="row login-content">
        <div className="col-6 login-form">
          <div className="login-header">
            <div className="login-logo">
              <img src={logo} alt="logo" width={"50px"} />
            </div>
            <div className="login-title">
              Ai.Text<b>book</b>
            </div>
          </div>
          {/* <LoginForm /> */}
          <RegisterForm />
        </div>
        <div className="col-6 login-image">
          <LoginPageImages />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
