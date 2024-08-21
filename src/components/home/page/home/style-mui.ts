import { Box, FormControl, Grid, TextareaAutosize } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleGroupBook = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    width: '-webkit-fill-available',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '-6%'
}));

export const StyleBoxBook = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    width: '20%',
    padding: '20px',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

export const StyleTitle = muiStyled('p')(({ theme }) => ({
    color: '#159EEC',
    fontSize: '18px',
    fontWeight: 'bold',
    wordSpacing: '2px'
}));

export const StyleSubTitle = muiStyled('p')(({ theme }) => ({
    color: '#1F2B6C',
    fontSize: '32px',
    fontWeight: 'bold'
}));

export const StyleBoxTitle = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center'
}));

export const StyleGirdInput = muiStyled(Grid)(({ theme }) => ({
    height: '60px',
    border: '0.5px solid white',
}));

export const StyleBookInput = muiStyled('input')(({ theme }) => ({
    color: 'white',
    background: 'transparent',
    width: '-webkit-fill-available',
    height: '100%',
    paddingLeft: '20px',
    fontSize: '16px',
    border: '0',
    outline: 'none',
    "::placeholder": {
        color: 'white'
    }
}));

export const StyleBookTextArea = muiStyled(TextareaAutosize)(({ theme }) => ({
    color: 'white',
    background: 'transparent',
    width: '-webkit-fill-available',
    height: '100%',
    paddingLeft: '20px',
    fontSize: '16px',
    border: '0',
    outline: 'none',
    resize: 'none',
    "::placeholder": {
        color: 'white'
    }
}));

export const StyleFormControl = muiStyled(FormControl)(({ theme }) => ({
    width: '100%',
    height: '100%',
    ".MuiSelect-select": { paddingLeft: '20px' },
    "em, svg": { color: 'white' },
    "em": {
        fontSize: '16px'
    },
    ".MuiInputBase-root": { height: '100%' }
}));

export const StyleBtnSubmit = muiStyled('button')(({ theme }) => ({
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '0 0 5px 5px',
    backgroundColor: '#BFD2F8',
    color: '#1F2B6C',
    fontSize: '16px',
    fontWeight: 'bold'
}));

export const StyleGroupInteract = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
}));

export const StyleBoxInteract = muiStyled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '5px',
    fontSize: '14px'
}));

export const StyleIconContact = muiStyled('img')(({ theme }) => ({
    width: '35px'
}));