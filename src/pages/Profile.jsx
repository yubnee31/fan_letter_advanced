import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import defaultImg from "../assets/defaultImg.jpg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editAvatar, editNickname } from "redux/modules/auth";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth.user);
  const accessToken = localStorage.getItem("accessToken");
  const [isEdit, setIsEdit] = useState(false);
  const [newNickname, setNewNickname] = useState();
  const [newAvatar, setNewAvatar] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const imgRef = useRef();
  const dispatch = useDispatch();

  const changeAvatar = () => {
    const imgFile = imgRef.current.files[0];
    setNewAvatar(imgFile);
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
  };

  const updataAvatar = async () => {
    const formData = new FormData();
    formData.append("avatar", newAvatar);
    try {
      const { data } = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("사진이 변경되었습니다.");
      dispatch(editAvatar(data.avatar));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updateNickname = async () => {
    try {
      const { data } = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        { nickname: newNickname },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(editNickname(data.nickname));
      toast.success(data.message);
      setIsEdit(false);
    } catch (error) {
      toast.error("닉네임 변경사항이 없습니다.");
    }
  };

  return (
    <>
      <ToastContainer />
      <ProfileDiv>
        <StMain>
          <Title>{userId}님의 PROFILE</Title>

          <Avatar src={previewImg || avatar || defaultImg} />

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
              <StLabel htmlFor="profileImg">사진 선택하기</StLabel>
              <SaveImgBtn onClick={updataAvatar}>사진 저장</SaveImgBtn>
              <NicknameInput
                defaultValue={nickname}
                onChange={(e) => setNewNickname(e.target.value)}
              />
              <div>
                <CancelBtn onClick={() => setIsEdit(false)}>취소</CancelBtn>
                <CompleteBtn onClick={updateNickname}>수정완료</CompleteBtn>
              </div>
            </>
          ) : (
            <>
              <StSpan>{nickname}</StSpan>
              <div>
                <EditBtn onClick={() => setIsEdit(true)}>수정하기</EditBtn>
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
  align-items: center;
  border-radius: 5px;
  color: black;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 25px;
`;

const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 30px;
`;

const StLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 5px;
`;
const SaveImgBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 15px;
  margin-top: 5px;
`;

const NicknameInput = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 20px;
  font-size: 20px;
  padding: 2px 5px;
`;

const StSpan = styled.span`
  font-size: 20px;
  margin-top: 20px;
`;

const EditBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CancelBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CompleteBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 5px;
`;
