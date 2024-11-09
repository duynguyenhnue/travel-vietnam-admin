'use client';

import { configureStore } from '@reduxjs/toolkit';

import dialog from './dialog';

const store = configureStore({
  reducer: {
    dialog,
  },
});

export default store;
