import { Box, Button, TextField } from "@mui/material";
import AuthOther from "../other";
import { StyleBoxForm, StyleButton, StyleForfotPassword, StyleTextField } from "../style-mui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogActions } from "../../../redux/dialog";
import ForgotPassword from "../forgot-password";
import { SnackbarActions } from "../../../redux/snackbar";
import Snackbars from "../../snackbar";

export default function SignIn() {
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        dispatch(DialogActions.setForgotPassword(true))  
    };
    const handleLogin = () => {
        
    }
    return (
        <StyleBoxForm>
            <StyleTextField label="Email or username" variant="standard" />
            <StyleTextField label="Password" variant="standard" />
            <StyleButton variant="contained" onClick={handleLogin}>Sign In</StyleButton>
            <StyleForfotPassword onClick={handleClickOpen}>Forgot password?</StyleForfotPassword>
            <AuthOther />
            <ForgotPassword />
        </StyleBoxForm>
    )
}