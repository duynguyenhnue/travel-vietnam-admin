import { configureStore } from "@reduxjs/toolkit";
import dialog from "./dialog";
import snackbar from "./snackbar";

const store = configureStore({
    reducer: {
        dialog: dialog,
        snackbar: snackbar
    }
})

export default store;