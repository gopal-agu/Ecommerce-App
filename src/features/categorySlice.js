import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { CATEGORY_API } from "../services/api";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await api.get(CATEGORY_API);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",

  initialState: {
    categories: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })

      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;