import { Box, Grid } from "@mui/material";
import { StyleBoxTitle, StyleIconContact, StyleSubTitle, StyleTitle } from "../page/home/style-mui";
import { useTranslation } from "react-i18next";

export default function ContactCPN() {
    const contacts = [
        {
            name: 'Emergency',
            content: [
                "(84) 708-200-334",
                "(237) 339-237-941"
            ],
        },
        {
            name: 'Location',
            content: [
                "14 Nghi Xuan"
            ],
        },
        {
            name: 'Email',
            content: [
                "liorion.nguyen@gmail.com",
                "stu715105031@hnue.edu.vn"
            ],
        },
        {
            name: 'Working Hours',
            content: [
                "Mon-Sat 09:00-20:00",
                "Sunday Emergency only"
            ],
        }
    ]
    const { t } = useTranslation();
    return (
        <StyleBoxTitle>
            <StyleTitle>{t("Get in touch")}</StyleTitle>
            <StyleSubTitle>{t("Contact")}</StyleSubTitle>
            <Grid container columnSpacing={4}
                sx={{
                    marginBottom: '80px',
                    ".MuiGrid-item": {
                        paddingTop: '40px'
                    }
                }}
            >
                {
                    contacts.map((contact: any) => (
                        <Grid item xs={3}
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    backgroundColor: '#BFD2F8',
                                    color: '#1F2B6C',
                                    borderRadius: '5px',
                                    padding: '40px 20px',
                                    flex: 1,
                                }}
                            >
                                {contact.name == "Emergency" && <StyleIconContact src="Images/home/header/phone.svg" />}
                                {contact.name == "Location" && <StyleIconContact src="Images/home/header/location.svg" />}
                                {contact.name == "Email" && <StyleIconContact src="Images/home/home/icon_email_contact.svg" />}
                                {contact.name == "Working Hours" && <StyleIconContact src="Images/home/header/time.svg" />}

                                <p
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold'
                                    }}
                                >{t(contact.name)}</p>
                                {
                                    contact.content.map((item: any) => (
                                        <p
                                            style={{
                                                fontSize: '16px',
                                            }}
                                        >{t(item)}</p>
                                    ))
                                }
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </StyleBoxTitle>
    );
}