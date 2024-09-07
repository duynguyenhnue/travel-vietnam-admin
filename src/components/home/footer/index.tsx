import { Box } from "@mui/material";
import { StyleBoxDetails, StyleBoxTitle, StyleContentDetails, StyleTitleDetails } from "../style-mui";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const iconsSocial = [
        {
            name: "Facebook",
            src: "/Images/auth/icons/icon-facebook.svg",
            href: "https://www.facebook.com/chungg.203"
        },
        {
            name: "Instagram",
            src: "/Images/auth/icons/icon-instagram.svg",
            href: "https://www.instagram.com/Chungg.203"
        },
        {
            name: "Tiktok",
            src: "/Images/auth/icons/icon-tiktok.svg",
            href: "https://www.tiktok.com/@chungg.203"
        },
        {
            name: "Twitter",
            src: "/Images/auth/icons/icon-twitter.svg",
            href: "#"
        }
    ];
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                width: "calc(100vw - 20%)",
                backgroundColor: '#1F2B6C',
                display: 'flex',
                flexDirection: 'column',
                padding: '50px 10%',
                gap: '40px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <StyleBoxTitle>
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#BFD2F8',
                            fontFamily: "Yeseva One",
                            marginBottom: '-15px'
                        }}
                    >MEDIMANAGER</p>
                    <p
                        style={{
                            color: 'white',
                            fontSize: '16px',
                            fontFamily: 'Work Sans, sans-serif'
                        }}
                    >{t("Leading the Way in Medical Execellence, Trusted Care.")}</p>
                </StyleBoxTitle>
                <StyleBoxTitle>
                    <StyleTitleDetails>{t("Important Links")}</StyleTitleDetails>
                    <StyleBoxDetails>
                        <StyleContentDetails>{t("Appointment")}</StyleContentDetails>
                        <StyleContentDetails>{t("Doctors")}</StyleContentDetails>
                        <StyleContentDetails>{t("Services")}</StyleContentDetails>
                        <StyleContentDetails>{t("About Us")}</StyleContentDetails>
                    </StyleBoxDetails>
                </StyleBoxTitle>
                <StyleBoxTitle>
                    <StyleTitleDetails>{t("Contact Us")}</StyleTitleDetails>
                    <StyleBoxDetails>
                        <StyleContentDetails>{t("Call")}: (84) 708-200-334</StyleContentDetails>
                        <StyleContentDetails>{t("Email")}: liorion.nguyen@gmail.com</StyleContentDetails>
                        <StyleContentDetails>{t("Address")}: 12 Nghi Xuan</StyleContentDetails>
                        <StyleContentDetails>{t("Some country")}</StyleContentDetails>
                    </StyleBoxDetails>
                </StyleBoxTitle>
                <StyleBoxTitle>
                    <StyleTitleDetails>{t("Newsletter")}</StyleTitleDetails>
                    <Box
                        sx={{
                            backgroundColor: '#BFD2F8',
                            display: 'flex',
                            gap: '15px',
                            padding: '10px',
                            borderRadius: '5px'
                        }}
                    >
                        <input placeholder="Enter your email address" type="email" style={{
                            background: 'transparent',
                            outline: 'none',
                            border: '0',
                            color: '#1F2B6C',
                            fontSize: '14px',
                            minWidth: '270px'
                        }} />
                        <button
                            style={{
                                background: 'transparent',
                                border: '0'
                            }}
                        ><img src="/Images/home/footer/send.svg" /></button>
                    </Box>
                </StyleBoxTitle>
            </Box>
            <hr
                style={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#BFD2F8',
                    border: '0'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <p
                    style={{
                        color: 'white',
                        fontSize: '16px',
                        fontFamily: 'Work Sans, sans-serif'
                    }}
                >© 2021 {t("Hospital’s name All Rights Reserved by LIORION")} </p>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    {
                        iconsSocial.map((icon: any) => (
                            <a key={icon.name} href={icon.href}>
                                <img src={icon.src} alt={icon.name}
                                    style={{
                                        filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg)',
                                        width: '24px'
                                    }}
                                />
                            </a>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
}