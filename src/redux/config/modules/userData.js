import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      localStorage.setItem("key", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { addUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
