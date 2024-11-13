'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    customer: [] as string[],
  },
  reducers: {
    setShowCustomer(state, action: PayloadAction<string[]>) {
      state.customer = action.payload;
    },
  },
});

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;
