import { Box, Button, TextField } from "@mui/material";
import AuthOther from "../other";
import { StyleBoxForm, StyleButton, StyleForfotPassword, StyleTextField } from "../style-mui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogActions } from "../../../redux/dialog";
import ForgotPassword from "../forgot-password";
import { SnackbarActions } from "../../../redux/snackbar";
import { request } from "../../../api/request";
import Cookies from 'js-cookie';

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleClickOpen = () => {
        dispatch(DialogActions.setForgotPassword(true))
    };
    const handleLogin = async () => {
        const data = {
            username: username,
            password: password
        };
        const fetch = await request("POST", data, "auth/login");
        console.log(fetch);
        if (fetch && fetch.status === 401) {
            dispatch(SnackbarActions.OpenSnackbar(
                {
                    open: true,
                    content: fetch.description,
                    state: "error",
                }))
        } else if (fetch.status === 201) {
            Cookies.set('accessToken', fetch.data.accessToken, { expires: 60 / 86400, path: '/' }); 
            Cookies.set('refreshToken', fetch.data.refreshToken, { expires: 7, path: '/' }); 
            dispatch(SnackbarActions.OpenSnackbar(
                {
                    open: true,
                    content: fetch.description,
                    state: "succes",
                }))

        }
    }
    return (
        <StyleBoxForm>
            <StyleTextField label="Email or username" variant="standard" value={username} onChange={(e: any) => { setUsername(e.target.value) }} />
            <StyleTextField label="Password" variant="standard" value={password} onChange={(e: any) => { setPassword(e.target.value) }} />
            <StyleButton variant="contained" onClick={handleLogin}>Sign In</StyleButton>
            <StyleForfotPassword onClick={handleClickOpen}>Forgot password?</StyleForfotPassword>
            <AuthOther />
            <ForgotPassword />
        </StyleBoxForm>
    )
}