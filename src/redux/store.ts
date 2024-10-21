'use client';
import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialog";

const store = configureStore({
    reducer: {
        dialog: dialogReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
