import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FanLetterBox = styled.div`
  width: 100vh;
  margin: 0px auto 20px auto;
`;

const FanLetterUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 20px;
  border-radius: 5px;
  margin: 0px auto;
`;

const FanLetterList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid #f789a5;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const InfoSection = styled.section`
  display: flex;
`;

const ImgFigure = styled.figure`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const NameTimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const FanLetterContext = styled.p`
  margin-left: 70px;
  margin-top: 5px;
  background-color: #f789a5;
  border-radius: 10px;
  padding: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Fanletter({ fanletter }) {
  return (
    <FanLetterBox>
      <FanLetterUl>
        <Link to={`detail/${fanletter.id}`} style={{ textDecoration: "none" }}>
          <FanLetterList>
            <InfoSection>
              <ImgFigure>
                <Img src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTEx/MDAxNjA0MjI5NDA4Mjcy.bP1ZadsnhPnW8AhzMIei6WHdllsbdhc7UJOfo2ENiNEg.RUmfb7EZvjlfnoQKK0fWays6Md2bc1LdG9libPzXGK0g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_GP.jpg?type=w400"></Img>
              </ImgFigure>
              <NameTimeDiv>
                <span>{fanletter.nickname}</span>
                <time>{fanletter.createdAt}</time>
              </NameTimeDiv>
            </InfoSection>
            <FanLetterContext>{fanletter.content}</FanLetterContext>
          </FanLetterList>
        </Link>
      </FanLetterUl>
    </FanLetterBox>
  );
}

export default Fanletter;
