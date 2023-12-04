import fanletter from "../modules/fanletterSlice";
import { configureStore } from "@reduxjs/toolkit";
import auth from "../modules/authSlice";

const store = configureStore({
  reducer: {
    fanletter,
    auth,
  },
});

const getStore = () => store;
export default getStore;
