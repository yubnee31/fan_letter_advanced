import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [{}],
  isLoading: false,
  isError: false,
  error: null,
};

//데이터불러오기
export const __getData = createAsyncThunk(
  "getData",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/letters?_sort=createdAt&_order=desc"
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터추가
export const __addData = createAsyncThunk(
  "addData",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터삭제
export const __deleteData = createAsyncThunk(
  "deleteData",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:5000/letters/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 데이터수정
export const __updateData = createAsyncThunk(
  "updateData",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/letters/${payload.id}`,
        { content: payload.updateLetter }
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(payload);
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
    // addFanletter: (state, action) => {
    //   return [action.payload, ...state];
    // },
    // deleteFanletter: (state, action) => {
    //   return state.filter((fanletter) => fanletter.id !== action.payload);
    // },
    // updateFanletter: (state, action) => {
    //   return state.map((fanletter) => {
    //     if (fanletter.id === action.payload.id)
    //       return { ...fanletter, content: action.payload.updateLetter };
    //     return fanletter;
    //   });
    // },
  },
  extraReducers: {
    //__getData
    [__getData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    },
    [__getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    //__addData
    [__addData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__addData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters.push(action.payload);
    },
    [__addData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    //__deleteData
    [__deleteData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__deleteData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__deleteData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.letters.filter((item) => item.id !== action.payload);
    },
    //__updateData
    [__updateData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__updateData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, content: action.payload.updateLetter };
        else return item;
      });
    },
    [__updateData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});
export default fanletterSlice.reducer;
export const { addData, deleteData, updateData } = fanletterSlice.actions;
