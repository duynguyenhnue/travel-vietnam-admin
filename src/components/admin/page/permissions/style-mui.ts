import { Box, Button, LinkProps } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { StyleBox } from "../../dashboard/style-mui";
interface StyleRowProps extends LinkProps {
    numberRows: number;
}
export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleDataGrid = muiStyled(DataGrid)<StyleRowProps>(({ numberRows }) => ({
    ".MuiDataGrid-columnHeadersInner, .MuiDataGrid-row, .MuiDataGrid-columnHeadersInner>div, .MuiDataGrid-virtualScrollerRenderZone": {
        width: '100%',
    },
    ".MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        maxWidth: `${95 / numberRows}% !important`,
        minWidth: `${95 / numberRows}% !important`,
        width: `${95 / numberRows}% !important`
    },
    ".MuiDataGrid-cellCheckbox, .MuiDataGrid-columnHeaderCheckbox": {
        minWidth: '5% !important',
        maxWidth: '5% !important',
        width: '5% !important',
    },
    ".MuiDataGrid-columnHeaderTitle": {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    ".MuiDataGrid-cell--textLeft": {
        fontSize: '15px'
    }
}));

export const StyleBoxDataGrid = muiStyled(StyleBox)(({ theme }) => ({
    ".MuiDataGrid-row--borderBottom": {
        background: 'transparent !important'
    },
    ".MuiDataGrid-columnHeader, .MuiDataGrid-cell, .MuiDataGrid-filler": {
        border: '0 !important',
        color: 'white'
    },
    "svg, .MuiDataGrid-selectedRowCount, .MuiTablePagination-displayedRows": {
        color: 'white'
    },
    ".MuiDataGrid-cellEmpty": {
        display: 'none !important'
    },
    ".MuiDataGrid-root, .MuiDataGrid-footerContainer, .MuiDataGrid-filler>div": {
        borderWidth: '0 !important'
    }
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    fontSize: '13px',
    gap: '10px',
    display: 'flex',
    alignItems: 'center',
}));

export const StyleGroupButton = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '30px',
    ".MuiButtonBase-root": {
        color: 'white !important',
    }
}));