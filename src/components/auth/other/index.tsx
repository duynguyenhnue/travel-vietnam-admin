// @ts-ignore
import QrScanner from 'react-qr-scanner';
import { Box, Button } from "@mui/material";
import { StyleIcon } from "../style-mui";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DialogActions } from '../../../redux/dialog';
import ScannerQRCode from '../scanner-qr-code';

export default function AuthOther() {
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch(DialogActions.setScannerQrCode(true))
    };

    return (
        <Box>
            <Button>
                <StyleIcon src="Images/auth/icons/icon-google.svg" />
            </Button>
            <Button>
                <StyleIcon src="Images/auth/icons/icon-qr.png" onClick={handleClickOpen}/>
            </Button>
            <ScannerQRCode />
        </Box>
    );
}