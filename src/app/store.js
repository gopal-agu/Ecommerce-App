import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import categoryReducer from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});