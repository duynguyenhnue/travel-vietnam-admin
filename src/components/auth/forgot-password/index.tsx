import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogActions } from "../../../redux/dialog";
import { StyleContainerScannerQr } from "../style-mui";
import SendIcon from '@mui/icons-material/Send';
import { SnackbarActions } from "../../../redux/snackbar";
import { request } from "../../../api/request";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [cfpassword, setCfPassword] = useState<string>("");
    const [step, setStep] = useState("email");
    const modeForgotPassword = useSelector((state: any) => state.dialog.forgotPassword);
    const { t } = useTranslation();

    const handleClose = () => {
        dispatch(DialogActions.setForgotPassword(false))
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSentEmail = async () => {
        if (email) {
            if (isValidEmail(email)) {
                const fetch = await request("POST", { email: email }, "auth/forgotpassword/email");
                if (fetch.status === 200) {
                    dispatch(SnackbarActions.OpenSnackbar({
                        open: true,
                        content: 'The message has been sent to your inbox',
                        state: "correct"
                    }));
                    setStep("code");
                }
            } else {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'You entered your email address incorrectly',
                    state: "error"
                }))
            }
        } else {
            dispatch(SnackbarActions.OpenSnackbar({
                open: true,
                content: 'You must fill in your email',
                state: "warn"
            }))
        }
    }
    const handleVerifyCode = async () => {
        if (code) {
            if (code.length === 6) {
                let fetch = await request("POST", { email: email, code: code }, "verification-code/verify");

                if (fetch.isValid.status === 200) {
                    dispatch(SnackbarActions.OpenSnackbar({
                        open: true,
                        content: fetch.isValid.message,
                        state: "correct"
                    }));
                    setStep("newPassword")
                } else {
                    dispatch(SnackbarActions.OpenSnackbar({
                        open: true,
                        content: fetch.isValid.message,
                        state: "error"
                    }));
                }
            } else {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Your code is not correct',
                    state: "error"
                }))
            }
        } else {
            dispatch(SnackbarActions.OpenSnackbar({
                open: true,
                content: 'You must fill in your code',
                state: "warn"
            }))
        }
    }

    const handleNewPassword = async () => {
        if (password && cfpassword) {
            if (password == cfpassword) {
                if (true) {
                    let fetch = await request("POST", { email: email, password: password }, "users/updatePassword");
                    if (fetch) {
                        dispatch(SnackbarActions.OpenSnackbar({
                            open: true,
                            content: 'Updated password successfully',
                            state: "correct"
                        }));
                        setStep("email");
                        handleClose();
                    }
                } else {
                    dispatch(SnackbarActions.OpenSnackbar({
                        open: true,
                        content: 'The password format is not reasonable',
                        state: "error"
                    }))
                }
            } else {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Password and confirm password must match',
                    state: "error"
                }))
            }

        } else {
            dispatch(SnackbarActions.OpenSnackbar({
                open: true,
                content: 'You must fill in your password and confirm password',
                state: "warn"
            }))
        }
    }

    return (
        <Fragment>
            <StyleContainerScannerQr
                open={modeForgotPassword}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box
                    sx={{
                        minWidth: '300px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    <h2
                        style={{
                            fontSize: '32px',
                            fontWeight: '500'
                        }}
                    >{t("Forgot Password")}</h2>
                    {
                        step == "email" && <>
                            <p>{t("Enter your email address")}</p>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                type="email"
                                placeholder={t("Enter your email address")}
                                value={email}
                                onChange={(e: any) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </>
                    }
                    {
                        step == "code" && <>
                            <p>{t("Enter your code")}</p>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                type="text"
                                placeholder={t("Enter your code")}
                                value={code}
                                onChange={(e: any) => {
                                    setCode(e.target.value)
                                }}
                            />
                        </>
                    }
                    {
                        step == "newPassword" && <>
                            <p>{t("Enter your new password")}</p>
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                type="text"
                                placeholder={t("Enter your password")}
                                value={password}
                                onChange={(e: any) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                type="text"
                                placeholder={t("Enter your confirm password")}
                                value={cfpassword}
                                onChange={(e: any) => {
                                    setCfPassword(e.target.value)
                                }}
                            />
                        </>
                    }
                    <Button
                        sx={{
                            width: '100%'
                        }}
                        onClick={() => {
                            step == "email" ? handleSentEmail() :
                                step == "code" ? handleVerifyCode() : handleNewPassword()
                        }}
                        variant="contained" endIcon={<SendIcon />}>
                        {t("Continue")}
                    </Button>
                </Box>
            </StyleContainerScannerQr>
        </Fragment>
    );
}