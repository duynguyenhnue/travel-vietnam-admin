import { Box, LinkProps } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
interface StyleAmenuProps extends LinkProps {
    check?: boolean; 
}
export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleAmenu = muiStyled('a')<StyleAmenuProps>(({ check }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    textDecoration: 'none',
    padding: '20px 10%',
    width: '-webkit-fill-available',
    background: check ? 'linear-gradient(to right, rgba(21, 191, 253, 0.1), rgba(0, 255, 194, 0.3))' : '',
    color: check ? '#15BFFD' : '#FFFFFF',
    fontWeight: check ? 'bold' : '400',
    '&:hover': {
        background: 'linear-gradient(to right, rgba(21, 191, 253, 0.1), rgba(0, 255, 194, 0.3))',
        color: '#15BFFD',
        fontWeight: 'bold',
    }
}));
