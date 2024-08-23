import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { StyleAmenu } from "./style-mui";

export default function SideBar() {
    const navigate = useNavigate(); 
    const listNav = [
        {
            name: 'Dashboard',
            icon: "/Images/admin/sidebar/dashboard.svg",
            link: 'dashboard'
        },
        {
            name: 'Statistics',
            icon: "/Images/admin/sidebar/statistics.svg",
            link: 'statistics'
        },
        {
            name: 'Hospitals',
            icon: "/Images/admin/sidebar/hospitals.svg",
            link: 'hospitals'
        },
        {
            name: 'Users',
            icon: "/Images/admin/sidebar/users.svg",
            link: 'users'
        }
    ];

    const support = [
        {
            name: 'Messages',
            icon: "/Images/admin/sidebar/mails.svg",
            link: 'mails'
        },
        {
            name: 'Settings',
            icon: "/Images/admin/sidebar/settings.svg",
            link: 'settings'
        }
    ]
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    const handleLogin = () => {
        navigate(`/auth?page=signin`);
    }
    return (
        <Box
            sx={{
                backgroundColor: '#222338',
                height: '-webkit-fill-available',
                width: '15%',
                padding: '50px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '30px'
                }}
            >
                <img src="/Images/auth/logo.png" alt="logo"
                    style={{
                        width: '80%'
                    }}
                />
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    {
                        listNav.map((item: any, index: number) => (
                            <StyleAmenu
                                href={`/admin/${item.link}`}
                                check={path === item.link || ((path == undefined  || path == "") && item.name == "Dashboard")}
                                key={item.link}
                            >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </StyleAmenu>
                        ))
                    }
                </Box>
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    <p
                        style={{
                            margin: '0 10% 30px 10%',
                            color: '#BDBDC3',
                        }}
                    >SUPPORT</p>
                    {
                        support.map((item: any, index: number) => (
                            <StyleAmenu
                                href={`/admin/${item.link}`}
                                check={path === item.link}
                                key={item.link}
                            >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </StyleAmenu>
                        ))
                    }
                </Box>
            </Box>
            <Box>
                <StyleAmenu
                    onClick={handleLogin}
                >
                    <img src="/Images/admin/sidebar/logout.svg"/>
                    <p
                        style={{
                            fontSize: '23px',
                        }}
                    >Logout</p>
                </StyleAmenu>
            </Box>
        </Box>
    );
}