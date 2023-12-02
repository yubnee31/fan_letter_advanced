import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth.user);
  const [isEdit, setIsEdit] = useState(false);
  const [newNickname, setNewNickname] = useState();
  const [previewImg, setPreviewImg] = useState(null);
  const imgRef = useRef();

  const changeAvatar = () => {
    const imgFile = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
  };

  return (
    <>
      <ProfileDiv>
        <StMain>
          <Title>MY PROFILE</Title>

          <Avatar src={previewImg || avatar} />

          <input
            id="profileImg"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={imgRef}
            onChange={changeAvatar}
          />
          {isEdit ? (
            <>
              <StLabel htmlFor="profileImg">프로필사진 변경</StLabel>
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
                <button onClick={() => setIsEdit(true)}>수정하기</button>
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

const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
`;

const StLabel = styled.label`
  cursor: pointer;
  display: inline-block;
`;
