import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
export const createAddProductAsync = createAsyncThunk(
  "product/add",
  async ({ Price }) => {
    try {
      const { data } = await axios.post("/api/products", {
        Price,
      });
      return data;
    } catch (error) {
      console.error("Error Adding Products!: ", error);
      throw error; // re-throw the error to trigger the rejected state of the thunk
    }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createAddProductAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectProducts = state => {
  return state.products;
};

export default productSlice.reducer;
