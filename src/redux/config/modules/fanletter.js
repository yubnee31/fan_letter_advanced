import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import fakeData from "shared/fakeData.json";

// const initialState = fakeData;

const initialState = {
  letters: [{}],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getData = createAsyncThunk(
  "getData",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/letters");
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fanletterSlice = createSlice({
  name: "fanletter",
  initialState,
  reducers: {
    completeFanletter: (state, action) => {
      return [action.payload, ...state];
    },
    deleteFanletter: (state, action) => {
      return state.filter((fanletter) => fanletter.id !== action.payload);
    },
    updateFanletter: (state, action) => {
      return state.map((fanletter) => {
        if (fanletter.id === action.payload.id)
          return { ...fanletter, content: action.payload.updateLetter };
        return fanletter;
      });
    },
  },
  extraReducers: {
    [__getData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
      console.log(action.payload);
    },
    [__getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});
export default fanletterSlice.reducer;
export const { completeFanletter, deleteFanletter, updateFanletter } =
  fanletterSlice.actions;
