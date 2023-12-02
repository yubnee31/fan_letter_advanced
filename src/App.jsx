import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getData } from "redux/modules/fanletter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getData());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
