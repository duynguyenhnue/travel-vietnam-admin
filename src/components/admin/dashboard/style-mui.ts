import { Box, FormControl, LinkProps } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBoxRowSBW = muiStyled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}));

export const StyleFormController = muiStyled(FormControl)(({ theme }) => ({
    width: '120px',
    "fieldset": {
        border: '1px solid #15BFFD',
        borderRadius: '15px'
    },
    "label, svg": {
        color: 'white'
    }
}));

export const StyleBox = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: '#222338',
    borderRadius: '15px',
    width: '-webkit-fill-available',
    color: 'white',
    padding: '40px',
    gap: '30px'
}));

export const StylePTitle = muiStyled('p')(({ theme }) => ({
    color: '#EDEDED',
    fontWeight: 'bold',
    fontSize: '23px',
}));

export const StyleTable = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: '#222338',
    borderRadius: '20px',
    paddingTop: '10px',
    gap: '20px',
    ".MuiPaper-rounded": {
        boxShadow: 'none !important'
    }
}));

export const StyleTitleTable = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.8)",
    fontSize: "20px"
}));

export const StyleViewAllTable = muiStyled('a')(({ theme }) => ({
    color: "#6E86C2",
    fontSize: "18px",
    textDecoration: 'none',
}));

export const StyleHeadTable = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between',
    alignItems: 'end',
    padding: '0 10px'
}));
