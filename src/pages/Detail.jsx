import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteData, __updateData } from "redux/modules/fanletter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { logout } from "redux/modules/auth";

function Detail() {
  const { letters } = useSelector((state) => state.fanletter);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const foundletter = letters.find((fanletter) => fanletter.id === id);
  const [updateLetter, setUpdateLetter] = useState(foundletter.content);
  const [wantUpdate, setWantUpdate] = useState(false);

  const { userId } = useSelector((state) => state.auth.user);
  const accessToken = localStorage.getItem("accessToken");

  const updateBtn = () => {
    if (updateLetter === foundletter.content)
      alert("아무런 수정사항이 없습니다.");
    else {
      dispatch(__updateData({ id, updateLetter }));
      setWantUpdate(false);
      setUpdateLetter("");
      alert("수정하시겠습니까?");
      navigate("/");
    }
  };

  const deleteBtn = () => {
    dispatch(__deleteData(id));
    alert("삭제하시겠습니까?");
    navigate("/");
  };

  const token = async () => {
    try {
      const response = await axios.get(
        "https://moneyfulpublicpolicy.co.kr/user",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(logout());
    }
  };
  token();

  return (
    <>
      <ToastContainer />
      <StWholeBox>
        <StDetailBox>
          <div>
            <StHeader>
              <ImgNameDiv>
                <ImgFigure>
                  <ImgStyle src={foundletter.avatar}></ImgStyle>
                </ImgFigure>
                <StNickName>{foundletter.nickname}</StNickName>
              </ImgNameDiv>
              <StTime>{foundletter.createdAt}</StTime>
            </StHeader>
            <StTo>To: {foundletter.writedTo}</StTo>
          </div>

          {userId === foundletter.userId ? (
            wantUpdate ? (
              <>
                <Textarea
                  autoFocus
                  defaultValue={foundletter.content}
                  value={updateLetter}
                  onChange={(e) => setUpdateLetter(e.target.value)}
                ></Textarea>
                <BtnSection>
                  <StBtnDiv>
                    <StBtn onClick={() => setWantUpdate(false)}>취소</StBtn>
                  </StBtnDiv>
                  <StBtnDiv>
                    <StBtn onClick={updateBtn}>수정완료</StBtn>
                  </StBtnDiv>
                </BtnSection>
              </>
            ) : (
              <>
                <StContext>{foundletter.content}</StContext>
                <BtnSection>
                  <StBtnDiv>
                    <StBtn onClick={() => setWantUpdate(true)}>수정</StBtn>
                  </StBtnDiv>
                  <StBtnDiv>
                    <StBtn onClick={deleteBtn}>삭제</StBtn>
                  </StBtnDiv>
                </BtnSection>
              </>
            )
          ) : (
            <StContext>{foundletter.content}</StContext>
          )}
        </StDetailBox>
      </StWholeBox>
    </>
  );
}

export default Detail;

const StWholeBox = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  border: 3px solid #f7a7bb;
  padding: 16px;
  border-radius: 20px;
  color: white;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ImgFigure = styled.figure`
  margin-right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ImgStyle = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const StNickName = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const StTime = styled.time`
  font-size: 17px;
`;

const StTo = styled.p`
  padding-top: 12px;
  font-size: 25px;
  font-weight: 500;
`;

const StContext = styled.p`
  background-color: #f7a7bb;
  padding: 16px;
  font-size: 22px;
  line-height: 48px;
  border-radius: 20px;
  margin: 22px 10px;
  height: 275px;
  color: black;
  width: 750px;
`;

const Textarea = styled.textarea`
  background-color: #f7a7bb;
  padding: 16px;
  font-size: 22px;
  line-height: 48px;
  border-radius: 20px;
  margin: 22px 10px;
  height: 275px;
  color: black;
  width: 750px;
  resize: none;
`;

const BtnSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const StBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
`;

const StBtn = styled.button`
  font-size: 25px;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  background-color: #f7a7bb;
  text-align: right;
  border-radius: 10px;
`;
