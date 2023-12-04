import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "api";
import { toast } from "react-toastify";

const initialState = {
  user: {
    avatar: localStorage.getItem("avatar"),
    nickname: localStorage.getItem("nickname"),
    userId: localStorage.getItem("userId"),
    accessToken: localStorage.getItem("accessToken"),
  },
  isAuthenticated: localStorage.getItem("accessToken") ? true : false,
  isLoading: false,
  isError: false,
  error: null,
};

export const __login = createAsyncThunk(
  "login",
  async (userLoginData, thunkAPI) => {
    try {
      const { data } = await authApi.post(
        "/login?expiresIn=30m",
        userLoginData
      );
      if (data.success) {
        toast.success("로그인이 완료되었습니다. 팬레터를 작성해보세요!");
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
    editAvatar: (state, action) => {
      state.user.avatar = action.payload;
      localStorage.setItem("avatar", state.user.avatar);
    },
    editNickname: (state, action) => {
      state.user.nickname = action.payload;
      localStorage.setItem("nickname", state.user.nickname);
    },
  },
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__login.fulfilled]: (state, action) => {
      const { avatar, nickname, userId, accessToken } = action.payload;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      localStorage.setItem("accessToken", accessToken);
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { login, logout, editAvatar, editNickname } = authSlice.actions;
export default authSlice.reducer;
