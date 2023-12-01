import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth.user);
  const [isEdit, setIsEdit] = useState(false);
  const [newNickname, setNewNickname] = useState();

  return (
    <>
      <ProfileDiv>
        <StMain>
          <Title>MY PROFILE</Title>

          <img src={avatar} />
          {isEdit ? (
            <>
              <input
                defaultValue={nickname}
                onChange={(e) => setNewNickname(e.target.value)}
              />
              <div>{userId}</div>
              <div>
                <button onClick={() => setIsEdit(false)}>취소</button>
                <button>수정완료</button>
              </div>
            </>
          ) : (
            <>
              <span>{nickname}</span>
              <span>{userId}</span>
              <div>
                <button onClick={setIsEdit(true)}>수정하기</button>
              </div>
            </>
          )}
        </StMain>
      </ProfileDiv>
    </>
  );
}

export default Profile;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StMain = styled.main`
  width: 500px;
  background-color: #f7a7bb;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  border-radius: 5px;
  color: black;
`;

const Title = styled.h1`
  font-size: 35px;
`;
