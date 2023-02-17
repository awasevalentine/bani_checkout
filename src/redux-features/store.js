import { configureStore } from '@reduxjs/toolkit';
import checkoutDataReducer from './checkout/checkout.slice'

export const store = configureStore({
  reducer: {
    checkout: checkoutDataReducer
  },
});