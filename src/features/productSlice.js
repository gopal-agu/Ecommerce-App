import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, {
  PRODUCT_API,
  CATEGORY_PRODUCT_API,
} from "../Services/api";

// Fetch All Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(PRODUCT_API);
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Products By Category
export const fetchCategoryProducts = createAsyncThunk(
  "products/fetchCategoryProducts",
  async (category, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${CATEGORY_PRODUCT_API}/${category}`
      );

      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch All Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Category Products
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;