import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

function Login({ successLogin }) {
  const [isSignUp, setIsSignUp] = useState(true);

  if (successLogin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      {isSignUp ? (
        <LoginForm setIsSignUp={setIsSignUp} />
      ) : (
        <SignupForm setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
}

export default Login;
