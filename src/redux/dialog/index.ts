import { createSlice } from "@reduxjs/toolkit";

const DialogSlice = createSlice({
    name: 'Dialog',
    initialState: {
        forgotPassword: false,
        scannerQrCode: false,
        admin: {
            show: false,
            page: "",
        },
        showId: []
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
        },
        setAdmin(state, action) {
            return {
                ...state,
                admin: action.payload
            }
        },
        setShowId(state, action) {
            return {
                ...state,
                showId: action.payload
            }
        }
    },
})

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;