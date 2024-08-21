import { Box } from "@mui/material";
import { StyleBoxTitle, StyleSubTitle, StyleTitle } from "../page/home/style-mui";

export default function OurDoctors() {
    const listDoctors = [
        {
            name: "Dr. John Doe",
            specialized: "Neurology",
            src: "Images/home/home/listDoctors/doctor1.svg",
            social: [
                {
                    name: 'facebook',
                    link: ''
                },
                {
                    name: 'instagram',
                    link: ''
                },
                {
                    name: 'email',
                    link: ''
                },
            ]
        },
        {
            name: "Dr. John Doe",
            specialized: "Neurology",
            src: "Images/home/home/listDoctors/doctor2.svg",
            social: [
                {
                    name: 'facebook',
                    link: ''
                },
                {
                    name: 'instagram',
                    link: ''
                },
                {
                    name: 'email',
                    link: ''
                },
            ]
        },
        {
            name: "Dr. John Doe",
            specialized: "Neurology",
            src: "Images/home/home/listDoctors/doctor3.svg",
            social: [
                {
                    name: 'facebook',
                    link: ''
                },
                {
                    name: 'instagram',
                    link: ''
                },
                {
                    name: 'email',
                    link: ''
                },
            ]
        }
    ]
    return (
        <StyleBoxTitle>
            <StyleTitle>Trusted Care</StyleTitle>
            <StyleSubTitle>Our Doctors</StyleSubTitle>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: '50px'
                }}
            >
                {
                    listDoctors.map((doctor: any) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img src={doctor.src}
                                style={{
                                    width: '100%',
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    alignItems: 'center',
                                    padding: '20px 0',
                                    backgroundColor: '#BFD2F8',
                                    color: '#1F2B6C'
                                }}
                            >
                                <p>{doctor.name}</p>
                                <p
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        letterSpacing: '1.5px'
                                    }}
                                >{doctor.specialized}</p>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '20px'
                                    }}
                                >
                                    {
                                        doctor.social.map((item: any) => (
                                            <a href={item.link}>
                                                {item.name == "facebook" && <img src="Images/home/home/icon_facebook.svg" />}
                                                {item.name == "instagram" && <img src="Images/home/home/icon_instagram.svg" />}
                                                {item.name == "email" && <img src="Images/home/home/icon_email.svg" />}
                                            </a>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px 0',
                                    backgroundColor: '#1F2B6C',
                                    color: '#BFD2F8',
                                    borderRadius: '0 0 5px 5px'
                                }}
                            >
                                <p>View Profile</p>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </StyleBoxTitle>
    );
}