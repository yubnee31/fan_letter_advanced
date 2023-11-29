import { createSlice } from "@reduxjs/toolkit";
import fakeData from "shared/fakeData.json";

const initialState = fakeData;

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
});
export default fanletterSlice.reducer;
export const { completeFanletter, deleteFanletter, updateFanletter } =
  fanletterSlice.actions;
