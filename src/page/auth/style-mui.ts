import { Box, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleButtonFocus = muiStyled(Button)(({ theme }) => ({
    color: '#6b7379',
    fontWeight: 'bold',
    fontSize: '20px',
    position: 'relative',
    border: '0 !important',
    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '50%',
        transform: 'translateX(-50%)',
        height: '3px',
        backgroundColor: '#859ffc',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    },
}));

export const StyleButtonBlur = muiStyled(Button)(({ theme }) => ({
    color: '#aabac6',
    fontWeight: 'bold',
    fontSize: '18px',
    position: 'relative',
    border: '0 !important'
}));

export const StyleGroupIcons = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    gap: '30px'
}));

export const StyleIconsSocial = muiStyled('img')(({ theme }) => ({
    width: '30px',
}));

export const StyleIconPhone = muiStyled(LocalPhoneOutlinedIcon)(({ theme }) => ({
    width: '20px',
    color: '#6b8dff'
}));

export const StyleIconEmail = muiStyled(EmailOutlinedIcon)(({ theme }) => ({
    width: '20px',
    color: '#6b8dff'
}));

export const StyleDetailContact = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    fontSize: '12px'
}));

export const StyleGroupContact = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
}));

export const StyleFooterForm = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
}));

export const StyleGridLeft = muiStyled(Grid)(({ theme }) => ({
    backgroundColor: '#639cff',
    borderBottomRightRadius: '60px',
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 60px !important',
    height: '-webkit-fill-available',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const StyleGridRight = muiStyled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '-webkit-fill-available',
    justifyContent: 'center',
    gap: '60px',
    position: 'relative'
}));

export const StyleBoxForm = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    borderRadius: '20px',
    boxShadow: '#e2e9ff 0px 0px 5px 5px',
    width: '50%',
}));

export const StyleGroupInput = muiStyled(ButtonGroup)(({ theme }) => ({
    gap: '20px',
    padding: '0 50px',
    height: '60px'
}));

export const StyleBoxRadiusUI = muiStyled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100px',
    height: '100px',
    backgroundColor: '#639cff',
    top: 0,
    left: 0
}));

export const StyleRadiusUI = muiStyled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '60px',
    backgroundColor: '#f2f6ff'
}));

export const StyleContainer = muiStyled(Grid)(({ theme }) => ({
    backgroundColor: '#f2f6ff',
    width: '100vw',
    height: '100vh',
}));
