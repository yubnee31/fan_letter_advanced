import Header from "components/Header";
import Form from "components/Form";
import Fanletter from "components/Fanletter";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { __getData } from "redux/modules/fanletter";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "redux/modules/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState("Jisoo");
  const letters = useSelector((state) => state.fanletter.letters);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(__getData());
  }, []);

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
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch(logout());
    }
  };
  token();

  return (
    <div>
      <ToastContainer />
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
