import { Box, FormControl, Grid, MenuItem, Select, TextareaAutosize } from "@mui/material";
import { StyleBookInput, StyleBookTextArea, StyleBoxBook, StyleBoxInteract, StyleBoxTitle, StyleBtnSubmit, StyleFormControl, StyleGirdInput, StyleGroupBook, StyleGroupInteract, StyleIconContact, StyleSubTitle, StyleTitle } from "./style-mui";
import { useState } from "react";
import OurDoctors from "../../our-doctors";
import News from "../../news";
import ContactCPN from "../../contact";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const ourServices = [
        "A Passion for Healing",
        "5-Star Care",
        "All our best",
        "Believe in Us",
        "A Legacy of Excellence",
        "Always Caring"
    ];
    const contactServices = [
        {
            name: "Free Checkup",
            src: "/Images/home/home/icon_freeCheckUp.svg"
        },
        {
            name: "Cardiogram",
            src: "/Images/home/home/icon_cardiogram.svg"
        },
        {
            name: "Dna Testing",
            src: "/Images/home/home/icon_dnaTesting.svg"
        },
        {
            name: "Blood Bank",
            src: "/Images/home/home/icon_bloodBank.svg"
        },
    ];

    const Specialties = [
        "Neurology", "Bones", "Oncology", "Otorhinolaryngology", "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine", "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
    ]
    const { t } = useTranslation();

    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                background: 'transparent'
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '700px',
                    padding: '0 10%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: '-10vw'
                }}
            >
                <img src="/Images/home/home/decorate.svg"
                    style={{
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                >
                    <p
                        style={{
                            color: '#159EEC',
                            fontSize: '18px',
                            fontWeight: 'bold'
                        }}
                    >{t("Caring for Life")}</p>
                    <p
                        style={{
                            color: '#1F2B6C',
                            fontSize: '48px',
                            fontWeight: 'bold',
                        }}
                    >{t("Leading the Way in Medical Excellence")}</p>
                    <button
                        style={{
                            color: '#1F2B6C',
                            backgroundColor: '#BFD2F8',
                            borderRadius: '50px',
                            border: '0',
                            padding: '10px 30px',
                            fontSize: '16px',
                            width: 'fit-content'
                        }}
                    >{t("Our Services")}</button>
                </Box>
                <img src="/Images/home/home/trend_doctors.png"
                    style={{
                        height: '100%',
                    }}
                />
                <StyleGroupBook>
                    <StyleBoxBook sx={{ backgroundColor: '#1F2B6C', color: 'white' }}>
                        <p>{t("Book an Appointment")}</p>
                        <img src="/Images/home/home/icon_calendar.svg" />
                    </StyleBoxBook>
                    <StyleBoxBook sx={{ backgroundColor: '#BFD2F8', color: '#1F2B6C' }}>
                        <p>{t("Book an Appointment")}</p>
                        <img src="/Images/home/home/icon_team.svg" />
                    </StyleBoxBook>
                    <StyleBoxBook sx={{ backgroundColor: '#159EEC', color: 'white' }}>
                        <p>{t("Book an Appointment")}</p>
                        <img src="/Images/home/home/icon_cash.svg" />
                    </StyleBoxBook>
                </StyleGroupBook>
            </Box>
            <Box
                sx={{
                    backgroundColor: 'transparent',
                    marginTop: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '60px'
                }}
            >
                <StyleBoxTitle>
                    <StyleTitle>{t("Welcome to Meddical")}</StyleTitle>
                    <StyleSubTitle>{t("A Great Place to Receive Care")}</StyleSubTitle>
                    <p
                        style={{
                            fontSize: '16px',
                            maxWidth: '40%',
                            wordWrap: "revert-layer",
                            textAlign: 'center'
                        }}
                    >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.")}</p>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        }}
                    >
                        <p
                            style={{
                                color: '#159EEC',
                                fontSize: '16px'
                            }}
                        >{t("Learn More")}</p>
                        <img src="/Images/home/home/icon_next.svg" />
                    </Box>
                </StyleBoxTitle>
                <img src="/Images/home/home/nav_welcome.svg"
                    style={{
                        width: '100%'
                    }}
                />
                <StyleBoxTitle>
                    <StyleTitle>{t("Care you can believe in")}</StyleTitle>
                    <StyleSubTitle>{t("Our Services")}</StyleSubTitle>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '450px',
                            paddingTop: '50px'
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid #1F2B6C',
                                borderRadius: '10px',
                                height: 'fit-content'
                            }}
                        >
                            {
                                contactServices.map((item: any) => (
                                    <Box key={item.name}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            alignItems: 'center',
                                            padding: '20px'
                                        }}
                                    >
                                        <img src={item.src} style={{ width: "27px" }} />
                                        <p>{t(item.name)}</p>
                                    </Box>
                                ))
                            }
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    alignItems: 'center',
                                    padding: '20px',
                                    backgroundColor: '#1F2B6C',
                                    color: 'white',
                                    borderRadius: '0 0 10px 10px'
                                }}
                            >
                                <p>{t("View All")}</p>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                maxWidth: '40%',
                                height: '100%',
                                paddingTop: '20px'
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '26px',
                                    fontWeight: 'bold'
                                }}
                            >{t("A passion for putting patients first.")}</p>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '20px'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {ourServices.slice(0, 3).map((service, index) => (
                                        <Box sx={{ display: 'flex', gap: '10px' }}>
                                            <img src="/Images/home/home/icon_item.svg" />
                                            <p key={index} style={{ fontSize: '18px' }}>{t(service)}</p>
                                        </Box>
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {ourServices.slice(3, 6).map((service, index) => (
                                        <Box sx={{ display: 'flex', gap: '10px' }}>
                                            <img src="/Images/home/home/icon_item.svg" />
                                            <p key={index} style={{ fontSize: '18px' }}>{t(service)}</p>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            <p
                                style={{
                                    fontSize: '16px',
                                }}
                            >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.")}</p>
                            <p
                                style={{
                                    fontSize: '16px',
                                }}
                            >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.")}</p>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                height: '100%'
                            }}
                        >
                            <img src="/Images/home/home/our_service_1.svg"
                                style={{
                                    height: "calc(50% - 10px)"
                                }}
                            />
                            <img src="/Images/home/home/our_service_2.svg"
                                style={{
                                    height: "calc(50% - 10px)"
                                }}
                            />
                        </Box>
                    </Box>
                </StyleBoxTitle>
                <StyleBoxTitle>
                    <StyleTitle>{t("Always Caring")}</StyleTitle>
                    <StyleSubTitle>{t("Our Specialties")}</StyleSubTitle>
                    <Grid container spacing={0}
                        sx={{
                            marginTop: '50px'
                        }}
                    >
                        {
                            Specialties.map((item: any) => (
                                <Grid item xs={3} key={item}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '10px',
                                        justifyContent: 'center',
                                        padding: '50px 0',
                                        border: '0.5px solid rgba(0, 0, 0, 0.19)'
                                    }}
                                >
                                    <img src="/Images/home/home/icon_specialties.svg" />
                                    <p
                                        style={{
                                            fontSize: '16px'
                                        }}
                                    >{t(item)}</p>
                                </Grid>
                            ))
                        }
                    </Grid>
                </StyleBoxTitle>
                <Box
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        width: '100vw',
                        height: '570px',
                        marginLeft: '-10vw',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            zIndex: '-1',
                            opacity: '0.2',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <img src="/Images/home/home/bookAnAppointment.svg"
                            style={{
                                width: '100vw',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            padding: '0 10%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                maxWidth: '35%',
                            }}
                        >
                            <p
                                style={{
                                    color: '#159EEC',
                                    fontSize: '32px',
                                }}
                            >{t("Book an Appointment")}</p>
                            <p
                                style={{
                                    fontSize: '16px'
                                }}
                            >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.")}</p>
                        </Box>
                        <Grid container spacing={0}
                            sx={{
                                borderRadius: '5px',
                                backgroundColor: '#1F2B6C',
                                width: '50%'
                            }}
                        >
                            <StyleGirdInput item xs={6}>
                                <StyleBookInput type="text" placeholder="Name" />
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleFormControl>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </StyleFormControl>
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleBookInput type="text" placeholder="Email" />
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleBookInput type="text" placeholder="Phone" />
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleFormControl>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </StyleFormControl>
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleFormControl>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </StyleFormControl>
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleFormControl>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </StyleFormControl>
                            </StyleGirdInput>
                            <StyleGirdInput item xs={6}>
                                <StyleFormControl>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </StyleFormControl>
                            </StyleGirdInput>
                            <StyleGirdInput item xs={12} sx={{
                                height: '150px',
                                paddingTop: '20px'
                            }}>
                                <StyleBookTextArea placeholder="Message" maxRows={4} />
                            </StyleGirdInput>
                            <StyleGirdInput item xs={12} sx={{ border: '0' }}>
                                <StyleBtnSubmit>{t("SUBMIT")}</StyleBtnSubmit>
                            </StyleGirdInput>
                        </Grid>
                    </Box>
                </Box>
                <OurDoctors />
                <News />
                <ContactCPN />
            </Box>
        </Box>
    );
}