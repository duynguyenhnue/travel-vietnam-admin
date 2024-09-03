import { Box, Button } from "@mui/material";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user.user);
    const { t } = useTranslation();

    const contact = [
        {
            icon: "/Images/home/header/phone.svg",
            name: "Emergency",
            content: "(84) 708-200-334"
        },
        {
            icon: "/Images/home/header/time.svg",
            name: "Work Hour",
            content: "07:00 - 18:00 Everyday"
        },
        {
            icon: "/Images/home/header/location.svg",
            name: "Location",
            content: "12 Nghi Xuan"
        }
    ]

    const menu = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Doctors",
            link: "/doctors"
        },
        {
            name: "News",
            link: "/news"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Advise",
            link: "/advise"
        },
    ]

    const handleLogin = () => {
        navigate(`/auth?page=signin`);
    }
    const handleLogout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        navigate(`/auth?page=signin`);
    }

    const location = useLocation();
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    zIndex: 100000
                }}
            >
                <Box
                    sx={{
                        width: '-webkit-fill-available',
                        padding: '10px 10%',
                        height: '60px',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            height: '100%'
                        }}
                    >
                        <img src="/Images/auth/logo.png"
                            style={{
                                height: '100%',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            height: '80%',
                            display: 'flex',
                            gap: '20px'
                        }}
                    >
                        {
                            contact.map((item: any, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img src={item.icon}
                                        style={{
                                            height: '35px'
                                        }}
                                    />
                                    <Box>
                                        <p
                                            style={{
                                                color: '#1F2B6C',
                                                fontSize: '16px',
                                                fontFamily: 'Work Sans, sans-serif'
                                            }}
                                        >{t(item.name)}</p>
                                        <p style={{
                                            color: '#159EEC',
                                            fontSize: '16px',
                                            fontFamily: 'Work Sans, sans-serif'
                                        }}>{item.content}</p>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '-webkit-fill-available',
                        height: '60px',
                        backgroundColor: '#1F2B6C',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 10%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '30px'
                        }}
                    >
                        {
                            menu.map((item: any, index: number) => (
                                <a href={item.link}
                                    style={{
                                        color: location.pathname == item.link ? '#BFD2F8' : 'white',
                                        fontSize: '18px',
                                        fontWeight: location.pathname == item.link ? 'bold' : 'inherit',
                                        fontFamily: 'Work Sans, sans-serif',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {t(item.name)}
                                </a>
                            ))
                        }
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '30px',
                            alignItems: 'center'
                        }}
                    >
                        <img src="/Images/home/header/search.svg" />
                        <Button variant="contained"
                            sx={{
                                borderRadius: '50px',
                                backgroundColor: '#BFD2F8',
                                width: '170px',
                                color: '#1F2B6C',
                                fontSize: '16px',
                                fontFamily: 'Work Sans, sans-serif'
                            }}
                        >
                            {t("Appointment")}
                        </Button>
                        <Button variant="contained"
                            sx={{
                                borderRadius: '50px',
                                backgroundColor: '#BFD2F8',
                                width: '170px',
                                color: '#1F2B6C',
                                fontSize: '16px',
                                fontFamily: 'Work Sans, sans-serif'
                            }}
                            onClick={user ? handleLogout : handleLogin}
                        >
                            {t(user ? "Logout" : "Login")}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}