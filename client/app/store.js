import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import singleUserSlice from '../Slices/singleUserSlice'
import userSlice from '../Slices/userSlice'

const store = configureStore({
  reducer: { auth: authReducer, singleUser: singleUserSlice, users: userSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
