import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getData } from "redux/modules/fanletterSlice";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
