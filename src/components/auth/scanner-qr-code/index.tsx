// @ts-ignore
import QrScanner from 'react-qr-scanner';
import { useDispatch, useSelector } from "react-redux";
import { DialogActions } from "../../../redux/dialog";
import { Box, Button, Dialog } from "@mui/material";
import { Fragment, useState } from "react";
import { StyleBoxScannerQr, StyleContainerScannerQr, StyleLineScannerQr } from '../style-mui';
import { SnackbarActions } from '../../../redux/snackbar';

export default function ScannerQRCode() {
    const dispatch = useDispatch();
    const modeScannerQrCode = useSelector((state: any) => state.dialog.scannerQrCode)
    const [contactScanner, setContactScanner] = useState<any>(null);

    const handleScan = (data: any | null) => {
        if (data) {
            if (data.text) {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Qr code scan successful',
                    state: "correct"
                }))
                setContactScanner(parseStringToObject(data.text))
            } else {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Qr code format error',
                    state: "warn"
                }))
            }
        }
    };

    const handleError = (err: any) => {
        console.error(err);
    };
    const handleClose = () => {
        dispatch(DialogActions.setScannerQrCode(false))
    };

    const parseStringToObject = (inputString: string) => {
        const parts = inputString.split('|');
        if (parts.length < 6) {
            console.log(parts);
            
        }
        const result = {
            id: parts[0],
            idcmnd: parts[1],
            name: parts[2],
            birthDate: parts[3],
            gender: parts[4],
            address: parts[5],
            ngay_cap: parts[6]
        };
        return result;
    }

    const handleScanAgain = () => {
        setContactScanner(null);
    }
    
    return (
        <Fragment>
            <StyleContainerScannerQr
                open={modeScannerQrCode}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <h2>Scan CCCD QR Code</h2>

                {
                    contactScanner
                        ?
                        <>
                            <Box>
                                <h2>Scannable Information</h2>
                                <p>Please check your information again.</p>
                                <p>ID CCCD: {contactScanner.id}</p>
                                <p>ID CMND: {contactScanner.idcmnd}</p>
                                <p>Name: {contactScanner.name}</p>
                                <p>Birth Date: {contactScanner.birthDate}</p>
                                <p>Gender: {contactScanner.gender}</p>
                                <p>Address: {contactScanner.address}</p>
                                <p>Date Of Issue: {contactScanner.ngay_cap}</p>
                            </Box>
                            <Box>
                                <Button variant="contained" color="success">
                                    Login
                                </Button>
                                <Button variant="contained" onClick={handleScanAgain}>
                                    Scan Again
                                </Button>
                            </Box>
                        </>
                        :
                        <>
                            <p>Please enter the qr code into the scan box below</p>
                            <StyleBoxScannerQr>
                                <QrScanner
                                    onScan={handleScan}
                                    onError={handleError}
                                />
                                <StyleLineScannerQr></StyleLineScannerQr>
                            </StyleBoxScannerQr>
                        </>

                }
            </StyleContainerScannerQr>
        </Fragment>
    );
}