import { configureStore } from '@reduxjs/toolkit';
import { useProductReducer } from './reducers';

export const store = configureStore({
   reducer: {
      product: useProductReducer,
   }
})