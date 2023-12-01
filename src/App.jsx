import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getData } from "redux/config/modules/fanletter";

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
