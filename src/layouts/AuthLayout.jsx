import React from "react";
import logo from "../assets/logos/logo3.jpeg";
import AuthRightPanelImages from "../components/AuthRightPanelImages";
import TypingPattern from "../utils/TypePattern";
import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="login-container">
      <div className="row login-content">
        <div className="col-6 login-form">
          <div className="login-header">
            <div className="login-logo">
              <img src={logo} alt="logo" width={"50px"} />
            </div>
            <div className="login-title">
              <TypingPattern />
            </div>
          </div>
          {children}
        </div>
        <div className="col-6 login-image">
          <AuthRightPanelImages />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
