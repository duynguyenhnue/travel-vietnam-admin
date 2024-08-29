import { Autocomplete, Box, Button, FormControl, FormControlLabel, LinkProps, TextareaAutosize } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleTitle = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '40px',
    textAlign: 'left',
    color: '#FFFFFF'
}));

export const StyleLineDashed = muiStyled('div')(({ theme }) => ({
    border: '1px dashed #B1B5C3',
}));

export const StyleSubtitle = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '22px',
    textAlign: 'left',
    color: '#FFFFFF'
}));

export const StyleLabel = muiStyled('p')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    textAlign: 'left',
    color: '8F8F8F'
}));

export const StyleInput = muiStyled('input')(({ theme }) => ({
    width: '-webkit-fill-available',
    background: '#222338',
    border: '0',
    borderRadius: '4px',
    height: '56px',
    paddingLeft: '10px',
    color: '#626D7D',
    fontSize: '16px',
    outline: 'none'
}));

export const StyleTextareaAutosize = muiStyled(TextareaAutosize)(({ theme }) => ({
    width: '-webkit-fill-available',
    background: '#222338',
    border: '0',
    borderRadius: '4px',
    padding: '10px',
    color: '#626D7D',
    fontSize: '16px',
    height: '80px',
    resize: 'none',
}));

export const StyleBoxInput = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    gap: '10px',
    width: '-webkit-fill-available',
    ".MuiAutocomplete-root": {
        width: '-webkit-fill-available !important',
        background: '#222338 !important',
        borderRadius: '4px'
    }
}));

export const StyleAutocomplete = muiStyled(Autocomplete)(({ theme }) => ({
    "fieldset": {
        border: 0,
    },
    "svg, label, input, span": {
        color: '#626D7D',
        outline: 'none'
    },
    ".MuiButtonBase-root": {
        background: "#222338"
    }
}));

export const StyleFormControl = muiStyled(FormControl)(({ theme }) => ({
    "fieldset": {
        border: 0,
    },
    ".MuiSelect-select": {
        background: "#222338",
        color: '#626D7D',
        outline: 'none'
    }
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    width: '100%',
    marginTop: '30px',
    background: 'linear-gradient(to right, #46AA72, #2DA0A4)',
    borderRadius: '4px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#FCFCFD',
    height: '48px',
}));

export const StyleScrollY = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    gap: '20px',
    maxHeight: '60vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#d1d1d1 transparent',
    '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#d1d1d1',
        borderRadius: '4px',
    },
}));

export const StyleBoxDateTime = muiStyled(StyleBoxInput)(({ theme }) => ({
    "fieldset": {
        border: '0'
    },
    ".MuiInputBase-root": {
        background: '#222338',
        color: '#626D7D',
    },
    ".MuiStack-root": {
        width: '100% !important',
        paddingTop: '0 !important',
        display: "flex",
        flexDirection: 'row !important',
        WebkitFlexDirection: 'row !important',
        gap: '30px'
    },
    ".MuiFormControl-root": {
        marginTop: '0',
        width: '100%'
    },
    "svg": {
        color: '#626D7D'
    }
}));