import fanletter from "./modules/fanletter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    fanletter,
  },
});

export default store;
