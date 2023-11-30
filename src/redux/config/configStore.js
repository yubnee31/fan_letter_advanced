import fanletter from "./modules/fanletter";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./modules/auth";
import userData from "./modules/userData";

const store = configureStore({
  reducer: {
    fanletter,
    auth,
    userData,
  },
});

export default store;
