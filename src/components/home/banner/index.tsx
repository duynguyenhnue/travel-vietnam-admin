import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Banner({ content }: any) {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                height: '450px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '-10vw'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 1
                }}
            >
                <p
                    style={{
                        color: '#1F2B6C',
                        fontSize: '18px',
                    }}
                >Home / {path}</p>
                <p
                    style={{
                        color: '#1F2B6C',
                        fontSize: '48px',
                        fontWeight: 'bold',
                    }}
                >{content.name}</p>
            </Box>
            <img src={content.src}
                style={{
                    height: '100%',
                    opacity: '0.3'
                }}
            />
        </Box>
    );
}