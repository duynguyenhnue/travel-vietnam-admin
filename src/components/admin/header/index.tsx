import { Box } from "@mui/material";

export default function Header() {
    return (
        <Box
            sx={{
                width: '-webkit-fill-available',
                display: 'flex',
                gap: '20px',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: '30px'
            }}
        >   
            <img src="/Images/admin/header/help.svg"/>
            <img src="/Images/admin/header/notification.svg"/>
            <img src="/Images/admin/header/profile.svg"/>
        </Box>
    );
}