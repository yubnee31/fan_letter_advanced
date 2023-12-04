import Header from "components/Header";
import Form from "components/Form";
import Fanletter from "components/Fanletter";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { __getData } from "redux/modules/fanletterSlice";
import { useDispatch } from "react-redux";
// import { logout } from "redux/modules/authSlice";
// import { toast } from "react-toastify";
// import { authApi } from "api";

function Home() {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState("Jisoo");
  const letters = useSelector((state) => state.fanletter.letters);

  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  return (
    <div>
      <Header artist={artist} setArtist={setArtist} />
      <Form />
      <div>
        {letters
          .filter((fanletter) => fanletter.writedTo === artist)
          .sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1;
            if (a.createdAt < b.createdAt) return 1;
            return 0;
          })
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
