import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from './authentificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), 
});
