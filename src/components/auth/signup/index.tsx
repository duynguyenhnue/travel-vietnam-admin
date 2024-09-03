import { Box, Button, TextField } from "@mui/material";
import AuthOther from "../other";
import { StyleBoxForm, StyleButton, StyleForfotPassword, StyleTextField } from "../style-mui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignUp() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handlePagechange = () => {
        navigate(`/auth?page=signin`);
    }
    return (
        <StyleBoxForm>
            <StyleTextField label={t("Full Name")} variant="standard" />
            <StyleTextField label={t("Email")} variant="standard" />
            <StyleTextField label={t("Password")} type="password" variant="standard" />
            <StyleButton variant="contained">{t('Sign Up')}</StyleButton>
            <StyleForfotPassword onClick={handlePagechange}>{t('I have an Account?')}</StyleForfotPassword>
            <AuthOther />
        </StyleBoxForm>
    )
}