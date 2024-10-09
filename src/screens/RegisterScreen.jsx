import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../features/users/RegisterForm";

function RegisterScreen() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export default RegisterScreen;
