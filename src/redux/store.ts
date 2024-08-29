import { configureStore } from "@reduxjs/toolkit";
import dialog from "./dialog";
import snackbar from "./snackbar";
import user from "./user";

const store = configureStore({
    reducer: {
        dialog: dialog,
        snackbar: snackbar,
        user: user
    }
})

export default store;