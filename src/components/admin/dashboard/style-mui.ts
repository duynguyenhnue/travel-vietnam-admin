import { Box, LinkProps } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleBox = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: '#222338',
    borderRadius: '15px',
    width: '-webkit-fill-available',
    color: 'white',
    padding: '40px'
}));