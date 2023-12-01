import Header from "components/Header";
import Form from "components/Form";
import Fanletter from "components/Fanletter";
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Home() {
  const [artist, setArtist] = useState("Jisoo");
  const letters = useSelector((state) => state.fanletter.letters);

  return (
    <div>
      <Header artist={artist} setArtist={setArtist} />
      <Form />
      <div>
        {letters
          .filter((fanletter) => fanletter.writedTo === artist)
          .map((fanletter) => (
            <Fanletter fanletter={fanletter} key={fanletter.id} />
          ))}
        {letters.filter((fanletter) => fanletter.writedTo === artist).length ===
        0 ? (
          <StP>
            남겨진 팬레터가 없습니다. 첫번째 펜레터의 주인공이 돼주세요. ❤️‍🔥
          </StP>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;

const StP = styled.p`
  font-weight: bold;
  text-align: center;
`;
