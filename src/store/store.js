import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { crudSlice } from './crud';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    crud: crudSlice.reducer
  },
});