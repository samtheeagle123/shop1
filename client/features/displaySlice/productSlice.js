import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
});


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
  },
});

export const selectProducts = state => {
  return state.products;
};

export default productSlice.reducer;
