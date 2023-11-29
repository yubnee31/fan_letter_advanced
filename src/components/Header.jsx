import React from "react";
import styled from "styled-components";

const TitleBox = styled.header`
  background-image: url(https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_455350_15885578894186068.jpg);
  position: relative;
  width: 100%;
  height: 370px;
  background-size: 25%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: bold;
  color: #f7a7bb;
  min-width: 475px;
  text-align: center;
`;

const NameBox = styled.ul`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  border: 3px solid #f7a7bb;
  border-radius: 5px;
  list-style: none;
  padding: 15px;
  width: 500px;
`;

const Name = styled.li`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #f7a7bb;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: ${(props) => (props.clicked === "true" ? "#f7a7bb" : "")};
  &:hover {
    background-color: #f7a7bb;
  }
`;

function Header({ artist, setArtist }) {
  const selectArtist = (ArtistName) => {
    setArtist(ArtistName);
  };

  return (
    <div>
      <TitleBox>
        <Title>BLACKPINK FANLETTER COLLECTION</Title>
        <NameBox>
          <Name
            value="Jisoo"
            onClick={() => selectArtist("Jisoo")}
            clicked={String(artist === "Jisoo")}
          >
            Jisoo
          </Name>
          <Name
            value="Jennie"
            onClick={() => selectArtist("Jennie")}
            clicked={String(artist === "Jennie")}
          >
            Jennie
          </Name>
          <Name
            value="Rose"
            onClick={() => selectArtist("Rose")}
            clicked={String(artist === "Rose")}
          >
            Rose
          </Name>
          <Name
            value="Lisa"
            onClick={() => selectArtist("Lisa")}
            clicked={String(artist === "Lisa")}
          >
            Lisa
          </Name>
        </NameBox>
      </TitleBox>
    </div>
  );
}

export default Header;
