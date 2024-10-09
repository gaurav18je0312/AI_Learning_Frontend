import React from "react";
import LoginForm from "../features/users/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

function LoginScreen() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginScreen;
