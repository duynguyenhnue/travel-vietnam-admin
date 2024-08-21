import { Box } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxTitle = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
}));

export const StyleTitleDetails = muiStyled('p')(({ theme }) => ({
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '500'
}));

export const StyleBoxDetails = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}));

export const StyleContentDetails = muiStyled('p')(({ theme }) => ({
    color: '#dfdfdf',
    fontSize: '14px',
    fontFamily: 'Work Sans, sans-serif'
}));

export const StyleMainPage = muiStyled('p')(({ theme }) => ({
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px'
}));