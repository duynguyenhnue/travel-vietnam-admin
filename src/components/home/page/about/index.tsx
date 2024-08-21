import { Box } from "@mui/material";
import { StyleMainPage } from "../../style-mui";
import Banner from "../../banner";
import OurDoctors from "../../our-doctors";
import Contact from "../../contact";
import { StyleSubTitle, StyleTitle } from "../home/style-mui";
import News from "../../news";

export default function About() {
    const ourServices = [
        "A Passion for Healing",
        "5-Star Care",
        "All our best",
        "Believe in Us",
        "A Legacy of Excellence",
        "Always Caring"
    ];
    return (
        <StyleMainPage>
            <Banner content={{
                name: "About us",
                src: "Images/home/home/nav_welcome.svg"
            }} />
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <img src="Images/home/about/bestcare.svg" />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}
                >
                    <StyleTitle>Welcome to Hospital name</StyleTitle>
                    <StyleSubTitle>Best Care for Your Good Health</StyleSubTitle>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {ourServices.slice(0, 3).map((service, index) => (
                                <Box sx={{ display: 'flex', gap: '10px' }}>
                                    <img src="Images/home/home/icon_item.svg" />
                                    <p key={index} style={{ fontSize: '18px' }}>{service}</p>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {ourServices.slice(3, 6).map((service, index) => (
                                <Box sx={{ display: 'flex', gap: '10px' }}>
                                    <img src="Images/home/home/icon_item.svg" />
                                    <p key={index} style={{ fontSize: '18px' }}>{service}</p>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <p
                        style={{
                            fontSize: '16px',
                        }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    <p
                        style={{
                            fontSize: '16px',
                        }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    height: '450px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: '-10vw',
                    backgroundImage: "url(Images/home/about/lorem-content-bg.svg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#1F2B6C',
                        opacity: '0.5'
                    }}
                ></Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        zIndex: '1'
                    }}
                >
                    <img src="Images/home/about/icon-quote.svg"
                        style={{
                            width: '45px'
                        }}
                    />
                    <p
                        style={{
                            color: 'white',
                            fontSize: '22px',
                            textAlign: 'center',
                            maxWidth: '50%'
                        }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.</p>
                    <hr
                        style={{
                            height: '1px',
                            border: '0',
                            background: 'white',
                            width: '15%'
                        }}
                    />
                    <p
                        style={{
                            color: 'white',
                            fontSize: '22px',
                            textAlign: 'center',
                            maxWidth: '50%'
                        }}
                    >John Doe</p>
                </Box>
            </Box>
            <OurDoctors />
            <News />
            <Contact />
        </StyleMainPage>
    );
}