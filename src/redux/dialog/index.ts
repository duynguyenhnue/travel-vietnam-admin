import { createSlice } from "@reduxjs/toolkit";

const DialogSlice = createSlice({
    name: 'Dialog',
    initialState: {
        forgotPassword: false,
        scannerQrCode: false,
    },
    reducers: {
        setForgotPassword(state, action) {
            return {
                ...state,
                forgotPassword: action.payload
            }
        },
        setScannerQrCode(state, action) {
            return {
                ...state,
                scannerQrCode: action.payload
            }
        }
    },
})

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;