import { Box } from "@mui/material";
import { styled as muiStyled, width } from "@mui/system";
export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleContainer = muiStyled(Box)(({ theme }) => ({
    width: '100%',        // Đảm bảo độ rộng là 100% của màn hình
    minHeight: '100vh',   // Đảm bảo chiều cao tối thiểu là 100% chiều cao màn hình
    position: 'relative',
    marginTop: '160px',
    overflowX: 'hidden',  // Ngăn chặn việc tràn nội dung theo chiều ngang
    overflowY: 'auto',
}));