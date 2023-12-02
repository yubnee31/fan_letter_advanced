import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getData } from "redux/modules/fanletter";
import { logout } from "redux/modules/auth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  // const { accessToken } = useSelector((state) => state.auth.user);
  // console.log(accessToken);

  useEffect(() => {
    dispatch(__getData());
  }, []);

  // const token = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://moneyfulpublicpolicy.co.kr/user",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //     toast.warning(error.response.data.message);
  //     dispatch(logout());
  //   }
  // };
  // token();

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
