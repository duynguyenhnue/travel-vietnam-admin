import { configureStore } from "@reduxjs/toolkit";
import dialog from "./dialog";
import snackbar from "./snackbar";
import user from "./user";
import message from "./advise";

const store = configureStore({
    reducer: {
        dialog: dialog,
        snackbar: snackbar,
        user: user,
        message: message,
    }
})

export default store;