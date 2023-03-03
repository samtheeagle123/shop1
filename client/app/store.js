import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import singleUserSlice from '../Slices/singleUserSlice'
import userSlice from '../Slices/userSlice'
import productSlice from '../features/displaySlice/productSlice';

const store = configureStore({
  reducer: { auth: authReducer, singleUser: singleUserSlice, users: userSlice, products: productSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
