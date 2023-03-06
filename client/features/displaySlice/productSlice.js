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

export const createAddProductAsync = createAsyncThunk(
  "products/addProduct",
  async (productObj, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/products", productObj);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createAddProductAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const selectProducts = state => {
  return state.products;
};

export const handleAddToCart = product => {
  console.log("Product being added to cart:", product);

  dispatch(addToCart(product));

  dispatch(
    createAddProductAsync({
      Price: product.Price,
    })
  ).then(response => {
    const { id: productId, Price } = response.payload;
    const quantity = 1;
    const requestBody = { productId, price: Price, quantity };

    axios
      .post("/api/products", requestBody)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  });
};

export default productSlice.reducer;
