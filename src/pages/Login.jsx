import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

function Login({ user }) {
  const [isSignUp, setIsSignUp] = useState(true);
  if (user) {
    return <Navigate to="/" replace />;
  }

  // const fetchLogin = async () => {
  //   const response = await axios.post(
  //     "https://moneyfulpublicpolicy.co.kr/register"
  //   );
  //   console.log("resonse", response);
  // };

  // useEffect(() => {
  //   fetchLogin();
  // }, []);

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
