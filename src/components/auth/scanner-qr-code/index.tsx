// @ts-ignore
import QrScanner from 'react-qr-scanner';
import { useDispatch, useSelector } from "react-redux";
import { DialogActions } from "../../../redux/dialog";
import { Box, Button, Dialog } from "@mui/material";
import { Fragment, useState } from "react";
import { StyleBoxScannerQr, StyleContainerScannerQr, StyleLineScannerQr } from '../style-mui';
import { SnackbarActions } from '../../../redux/snackbar';
import { request } from '../../../api/request';
import { UserActions } from '../../../redux/user';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function ScannerQRCode() {
    const dispatch = useDispatch();
    const modeScannerQrCode = useSelector((state: any) => state.dialog.scannerQrCode)
    const [contactScanner, setContactScanner] = useState<any>(null);
    const navigate = useNavigate();

    const handleScan = async (data: any | null) => {
        if (data) {
            if (data.text) {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Qr code scan successful',
                    state: "correct"
                }))
                const datadecode = parseStringToObject(data.text);
                setContactScanner(datadecode)
                let fetch = await request("GET", "", `users/cccd/${datadecode.id}`)
                if (fetch.status === 404) {
                    fetch = await request('POST', {
                        cccdNumber: datadecode.id,
                        fullName: datadecode.name,
                        username: normalizeString(datadecode.name),
                        password: datadecode.birthDate,
                        gender: datadecode.gender === "Nam" ? "Male" : "Female",
                        role: "Parient",
                        dateOfBirth: convertToISODate(datadecode.birthDate),
                    }, 'users');
                    if (!fetch) {
                        return;
                    }
                }
                dispatch(UserActions.setUser(fetch.data));

                const fetchAuth = await request("POST", {
                    username: fetch.data.username,
                    password: datadecode.birthDate,
                }, "auth/login")
                if (fetchAuth && fetchAuth.status === 401) {
                    dispatch(SnackbarActions.OpenSnackbar(
                        {
                            open: true,
                            content: fetch.description,
                            state: "error",
                        }))
                } else if (fetchAuth.status === 201) {
                    Cookies.set('accessToken', fetchAuth.data.accessToken, { expires: 3 / 288, path: '/' });
                    Cookies.set('refreshToken', fetchAuth.data.refreshToken, { expires: 7, path: '/' });
                    dispatch(SnackbarActions.OpenSnackbar(
                        {
                            open: true,
                            content: fetchAuth.description,
                            state: "succes",
                        }))

                        fetchAuth.data.user.role === "Admin" ? navigate(`/admin`) : navigate(`/`);
                }
            } else {
                dispatch(SnackbarActions.OpenSnackbar({
                    open: true,
                    content: 'Qr code format error',
                    state: "warn"
                }))
            }
        }
    };

    function convertToISODate(dateStr: string): string {
        const day = dateStr.slice(0, 2);
        const month = dateStr.slice(2, 4);
        const year = dateStr.slice(4);

        const date = new Date(`${year}-${month}-${day}T12:00:00.000Z`);

        return date.toISOString();
    }

    function normalizeString(input: string): string {
        const removeDiacritics = (str: string) => {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        };

        const lowerCaseStr = input.toLowerCase();

        return removeDiacritics(lowerCaseStr).replace(/\s+/g, '');
    }


    const handleError = (err: any) => {
        console.error(err);
    };
    const handleClose = () => {
        dispatch(DialogActions.setScannerQrCode(false))
    };

    const parseStringToObject = (inputString: string) => {
        const parts = inputString.split('|');
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