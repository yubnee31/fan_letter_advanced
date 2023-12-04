import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jsonApi } from "api";

const initialState = {
  letters: [{}],
  isLoading: true,
  isError: false,
  error: null,
};

//데이터불러오기
export const __getData = createAsyncThunk(
  "getData",
  async (payload, thunkAPI) => {
    try {
      const response = await jsonApi.get(
        "/letters?_sort=createdAt&_order=desc"
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터추가
export const __addData = createAsyncThunk(
  "addData",
  async (payload, thunkAPI) => {
    try {
      await jsonApi.post("/letters", payload);
      const { data } = await jsonApi.get("/letters");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터삭제
export const __deleteData = createAsyncThunk(
  "deleteData",
  async (payload, thunkAPI) => {
    try {
      await jsonApi.delete(`/letters/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 데이터수정
export const __updateData = createAsyncThunk(
  "updateData",
  async (payload, thunkAPI) => {
    try {
      await jsonApi.patch(`/letters/${payload.id}`, {
        content: payload.updateLetter,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fanletterSlice = createSlice({
  name: "fanletter",
  initialState,
  reducers: {},
  extraReducers: {
    //__getData
    [__getData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
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
      state.letters = action.payload;
      state.isError = false;
      state.error = null;
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
