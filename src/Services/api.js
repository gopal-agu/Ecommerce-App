import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export default api;

export const PRODUCT_API = "/products";
export const CATEGORY_API = "/products/category-list";
export const CATEGORY_PRODUCT_API = "/products/category";