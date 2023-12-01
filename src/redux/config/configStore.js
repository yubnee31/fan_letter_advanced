import fanletter from "../modules/fanletter";
import { configureStore } from "@reduxjs/toolkit";
import auth from "../modules/auth";

const store = configureStore({
  reducer: {
    fanletter,
    auth,
  },
});

export default store;
