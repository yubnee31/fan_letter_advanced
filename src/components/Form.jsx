import React, { useRef } from "react";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { completeFanletter } from "redux/config/modules/fanletter";

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

const NickNameInput = styled.input`
  width: 100%;
  padding: 5px 10px 5px 10px;
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

function Form() {
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const selectRef = useRef();
  const dispatch = useDispatch();

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
    if (!nickName || !content) return alert("닉네임과 내용은 필수값입니다.");
    const newFanLetter = {
      createdAt: UpdataDate,
      nickname: nickName,
      avatar:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTEx/MDAxNjA0MjI5NDA4Mjcy.bP1ZadsnhPnW8AhzMIei6WHdllsbdhc7UJOfo2ENiNEg.RUmfb7EZvjlfnoQKK0fWays6Md2bc1LdG9libPzXGK0g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_GP.jpg?type=w400",
      content: content,
      writedTo: selectArtist(),
      id: uuid(),
    };
    dispatch(completeFanletter(newFanLetter));
    setNickName("");
    setContent("");
  };
  return (
    <FanLetterFormDiv>
      <FanLetterForm onSubmit={newLetter}>
        <FanLetterSection>
          <FanLetterLabel>닉네임:</FanLetterLabel>
          <NickNameInput
            value={nickName}
            onChange={function (e) {
              return setNickName(e.target.value);
            }}
            placeholder="최대 7글자까지 작성할 수 있습니다."
            maxLength="6"
          ></NickNameInput>
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
  );
}

export default Form;
