import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

function Login({ user }) {
  if (user) {
    return <Navigate to="/" replace />;
  }
  // const [isSignUp, setIsSignUp] = useState(true);

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
      로그인
      {/* {isSignUp ? (
        <FormDiv>
          <LoginForm>
            <Title>❤️‍🔥 FANLETTER 작성을 위해 로그인해주세요 ❤️‍🔥</Title>
            <LoginInput
              name="id"
              placeholder="아이디 (4~10글자)"
              minLength={4}
              maxLength={10}
            ></LoginInput>
            <LoginInput
              name="password"
              placeholder="비밀번호 (4~15글자)"
              minLength={4}
              maxLength={15}
            ></LoginInput>
            <ButtonDiv>
              <StBtn>로그인</StBtn>
            </ButtonDiv>
            <SpanDiv>
              <StSpan onClick={() => setIsSignUp(false)}>
                회원이 아니신가요?
              </StSpan>
            </SpanDiv>
          </LoginForm>
        </FormDiv>
      ) : (
        <FormDiv>
          <LoginForm>
            <Title>❤️‍🔥 FANLETTER 작성을 위해 회원가입해주세요 ❤️‍🔥</Title>
            <LoginInput
              name="id"
              placeholder="아이디 (4~10글자)"
              minLength={4}
              maxLength={10}
            ></LoginInput>
            <LoginInput
              name="password"
              placeholder="비밀번호 (4~15글자)"
              minLength={4}
              maxLength={15}
            ></LoginInput>
            <LoginInput placeholder="닉네임 (1~10글자)"></LoginInput>
            <ButtonDiv>
              <StBtn>회원가입</StBtn>
            </ButtonDiv>
            <SpanDiv>
              <StSpan onClick={() => setIsSignUp(true)}>로그인</StSpan>
            </SpanDiv>
          </LoginForm>
        </FormDiv>
      )} */}
    </div>
  );
}

export default Login;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #f7a7bb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 500px;
  color: black;
  padding: 35px 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 35px;
  text-align: center;
`;

const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 12px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #f7a7bb;
  border-bottom: 1px solid black;
  &::placeholder {
    color: black;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  padding: 20px 35px;
`;

const SpanDiv = styled.div`
  text-align: center;
  font-size: 16px;
  color: white;
  margin-top: 25px;
`;

const StSpan = styled.span`
  user-select: none;
  cursor: pointer;
`;
