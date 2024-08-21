import { Box, Button, TextField } from "@mui/material";
import AuthOther from "../other";
import { StyleBoxForm, StyleButton, StyleForfotPassword, StyleTextField } from "../style-mui";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const handlePagechange = () => {
        navigate(`/auth?page=signin`);
    }
    return (
        <StyleBoxForm>
            <StyleTextField label="Full Name" variant="standard" />
            <StyleTextField label="Email" variant="standard" />
            <StyleTextField label="Password" variant="standard" />
            <StyleButton variant="contained">Sign Up</StyleButton>
            <StyleForfotPassword onClick={handlePagechange}>I have an Account?</StyleForfotPassword>
            <AuthOther />
        </StyleBoxForm>
    )
}