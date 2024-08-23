import { Box } from "@mui/material";
const getGreeting = () => {
    const currentHour = new Date().getHours(); // Lấy giờ hiện tại

    if (currentHour < 12) {
        return "Good morning";
    } else if (currentHour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
};
export default function Welcome() {
    const greeting = getGreeting();
    const name = "John Doe";
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: '30px',
                width: '100%'
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: '10px',
                    alignItems: 'flex-end'
                }}
            >
                <p
                    style={{
                        color: 'white',
                        fontSize: '30px'
                    }}
                >{greeting}</p>
                <p
                    style={{
                        color: '#15BFFD',
                        fontWeight: 'bold',
                        fontSize: '35px'
                    }}
                >{name}</p>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    padding: '20px',
                    background: 'linear-gradient(to right, #B2E6FD, #38CB89, #15BFFD)',
                    borderRadius: '15px',
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    minHeight: '100px',
                    alignItems: 'center',
                    width: '-webkit-fill-available',
                    position: 'relative'
                }}
            >
                <p>Welcome to the hospital management system</p>
                <img src="/Images/admin/header/doctor.svg"
                    style={{
                        position: 'absolute',
                        right: '20px',
                        bottom: 0
                    }}
                />
            </Box>
        </Box>
    );
}