import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function LoginForm({ setIsSignUp }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const loginBtnHandler = async (e) => {
    e.preventDefault();
    const userLoginData = {
      id: userId,
      password,
    };
    const { data } = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      userLoginData
    );
    console.log(data);
    setUserId("");
    setPassword("");
  };

  return (
    <>
      <FormDiv>
        <StForm onSubmit={loginBtnHandler}>
          <Title>❤️‍🔥 FANLETTER 작성을 위해 로그인해주세요 ❤️‍🔥</Title>
          <LoginInput
            name="id"
            type="text"
            value={userId}
            onChange={function (e) {
              return setUserId(e.target.value);
            }}
            placeholder="아이디를 입력해주세요 (4~10글자)"
            minLength={4}
            maxLength={10}
          ></LoginInput>
          <LoginInput
            name="password"
            type="password"
            value={password}
            onChange={function (e) {
              return setPassword(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요 (4~15글자)"
            minLength={4}
            maxLength={15}
          ></LoginInput>
          <ButtonDiv>
            <StBtn type="submit">로그인</StBtn>
          </ButtonDiv>
          <SpanDiv>
            <StSpan onClick={() => setIsSignUp(false)}>
              회원이 아니신가요?
            </StSpan>
          </SpanDiv>
        </StForm>
      </FormDiv>
    </>
  );
}

export default LoginForm;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StForm = styled.form`
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
