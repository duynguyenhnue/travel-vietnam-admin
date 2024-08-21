import { Box, Button, Dialog, TextField } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleIcon = muiStyled('img')(({ theme }) => ({
    width: '40px',
    height: '40px'
}));

export const StyleBoxForm = muiStyled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: '20px',
    width: '-webkit-fill-available',
    padding: '30px 50px',
    boxShadow: '#e2e9ff 0px 0px 5px 5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px'
}));

export const StyleTextField = muiStyled(TextField)(({ theme }) => ({
    width: '100%',
    fontSize: '11px !important'
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    width: '100%',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: '#4872ff'
}));

export const StyleForfotPassword = muiStyled('button')(({ theme }) => ({
    color: 'red',
    background: 'transparent',
    border: 'none'
}));

export const StyleContainerScannerQr = muiStyled(Dialog)(({ theme }) => ({
    ".MuiPaper-root": {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        borderRadius: '30px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
}));

export const StyleBoxScannerQr = muiStyled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    'video': {
        width: '100%',
        borderRadius: '30px',
        position: 'relative',
        zIndex: 0,
    },
    border: '1px solid grey',
    padding: '10px',
    borderRadius: '30px',
    width: '50%',
}));

export const StyleLineScannerQr = muiStyled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '25px',
    left: 0,
    width: '100%',
    height: '15px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0))',
    zIndex: 1,
    animation: 'moveBox 2s linear infinite'
}));