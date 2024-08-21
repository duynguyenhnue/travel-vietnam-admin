import { Box, Grid } from "@mui/material";
import { StyleMainPage } from "../../style-mui";
import Banner from "../../banner";
import Contact from "../../contact";

export default function Services() {
    const cardsData = [
        {
            id: 1,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
        {
            id: 2,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
        {
            id: 3,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
        {
            id: 4,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
        {
            id: 5,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
        {
            id: 6,
            title: 'Free Checkup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur massa in.',
            linkText: 'Learn More',
            src: 'Images/home/services/checkup.svg'
        },
    ];

    return (
        <StyleMainPage>
            <Banner content={{
                name: "Our Service",
                src: "Images/home/services/banner.svg"
            }} />
            <Grid container spacing={4}>
                {cardsData.map((card: any) => (
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                borderRadius: '5px',
                                border: '0.5px solid rgba(0, 0, 0, 0.19)'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative'
                                }}
                            >
                                <img src={card.src}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        right: '20px',
                                        bottom: '-8%',
                                        backgroundColor: '#1F2B6C',
                                        width: '80px',
                                        height: '80px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <img src="Images/home/services/icon_checkup.svg"/>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    padding: '40px 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}
                            >
                                <h3
                                    style={{
                                        color:'#1F2B6C',
                                        fontSize: '26px'
                                    }}
                                >{card.title}</h3>
                                <p
                                    style={{
                                        fontSize: '16px'
                                    }}
                                >{card.description}</p>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <a
                                        style={{
                                            color: '#159EEC',
                                            fontSize: '16px',
                                        }}
                                    >{card.linkText}</a>
                                    <img src="Images/home/services/icon_next.svg"/>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                ))}
            </Grid>
            <Contact />
        </StyleMainPage>
    );
}