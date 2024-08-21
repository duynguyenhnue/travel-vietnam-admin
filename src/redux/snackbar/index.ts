import { createSlice } from "@reduxjs/toolkit";

const SnackbarSlice = createSlice({
    name: 'Snackbar',
    initialState: {
        snackbar: {
            open: false,
            content: "",
            state: "" // warn, error, correct
        }
    },
    reducers: {
        OpenSnackbar(state, action) {
            return {
                ...state,
                snackbar: action.payload
            }
        },
        CloseSnackBar(state) {
            return {
                ...state,
                snackbar: {
                    open: false,
                    content: "",
                    state: "",
                }
            }
        }
    },
})

export const SnackbarActions = SnackbarSlice.actions;
export default SnackbarSlice.reducer;