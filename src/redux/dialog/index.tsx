'use client';

import { createSlice } from '@reduxjs/toolkit';

const DialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    customer: {
      showDetails: [],
      datas: [],
    },
  },
  reducers: {
    setDatasCustomer(state) {
      return {
        ...state,
        customer: {
          ...state.customer,
        },
      };
    },
    setShowCustomerDetails(state) {
      return {
        ...state,
        customer: {
          ...state.customer,
        },
      };
    },
  },
});

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;
