import React, { useRef } from "react";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { __addData } from "redux/modules/fanletter";

function Form() {
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const selectRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const date = new Date();
  const UpdataDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const selectArtist = () => {
    const selectedArtist = selectRef.current.value;
    return selectedArtist;
  };

  const newLetter = (e) => {
    e.preventDefault();
    if (!content) return toast.error("내용을 입력해주세요!");
    const newFanLetter = {
      createdAt: UpdataDate,
      nickname: user.nickname,
      avatar: user.avatar,
      content: content,
      writedTo: selectArtist(),
      id: uuid(),
      userId: user.userId,
    };
    dispatch(__addData(newFanLetter));
    toast.success("팬레터 작성이 완료되었습니다!");
    setContent("");
  };
  return (
    <>
      <ToastContainer />
      <FanLetterFormDiv>
        <FanLetterForm onSubmit={newLetter}>
          <FanLetterSection>
            <FanLetterLabel>닉네임:</FanLetterLabel>
            <StNickName>{user.nickname}</StNickName>
          </FanLetterSection>
          <FanLetterSection>
            <FanLetterLabel>내용:</FanLetterLabel>
            <ContextText
              value={content}
              onChange={function (e) {
                return setContent(e.target.value);
              }}
              placeholder="최대 100자까지 작성할 수 있습니다."
              maxLength="100"
            ></ContextText>
          </FanLetterSection>
          <FanLetterSection>
            <FanLetterLabel style={{ width: "190px" }}>
              누구에게 보내실 건가요?
            </FanLetterLabel>
            <select onChange={selectArtist} ref={selectRef}>
              <option value="Jisoo">Jisoo</option>
              <option value="Jennie">Jennie</option>
              <option value="Rose">Rose</option>
              <option value="Lisa">Lisa</option>
            </select>
          </FanLetterSection>
          <SubmitBtnDiv>
            <SubmitBtn type="submit">등록하기</SubmitBtn>
          </SubmitBtnDiv>
        </FanLetterForm>
      </FanLetterFormDiv>
    </>
  );
}

export default Form;

const FanLetterFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FanLetterForm = styled.form`
  width: 500px;
  background-color: #f7a7bb;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;

const FanLetterSection = styled.section`
  margin-bottom: 10px;
  display: flex;
`;

const FanLetterLabel = styled.label`
  color: black;
  width: 100px;
  display: flex;
  align-items: center;
`;

const StNickName = styled.span`
  color: black;
  margin-bottom: 5px;
`;

const ContextText = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  padding: 5px 10px 5px 10px;
`;

const SubmitBtn = styled.button`
  font-size: 14px;
  padding: 5px 10px 5ps 10px;
  cursor: pointer;
  user-select: none;
  background-color: white;
  border-radius: 5px;
  text-align: right;
  border-color: gray;
  color: black;
  &:hover {
    background-color: #f7a7bb;
  }
`;

const SubmitBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
