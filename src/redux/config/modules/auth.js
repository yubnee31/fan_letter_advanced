import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    avatar: localStorage.getItem("avata"),
    nickname: localStorage.getItem("nickname"),
    userId: localStorage.getItem("userId"),
    accessToken: localStorage.getItem("accessToken"),
  },
  isAuthenticated: localStorage.getItem("accessToken") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("avata", action.payload.avata);
      localStorage.setItem("nickname", action.payload.nickname);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
