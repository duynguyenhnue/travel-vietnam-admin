import { Box, Button, ButtonGroup, Grid, IconButton, TextField } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyleBoxForm, StyleBoxRadiusUI, StyleButtonBlur, StyleButtonFocus, StyleContainer, StyleDetailContact, StyleFooterForm, StyleGridLeft, StyleGridRight, StyleGroupContact, StyleGroupIcons, StyleGroupInput, StyleIconEmail, StyleIconPhone, StyleIconsSocial, StyleRadiusUI } from "./style-mui";
import SignUp from "../../components/auth/signup";
import SignIn from "../../components/auth/signin";

export default function Auth() {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(searchParams.get('page'))
    const navigate = useNavigate();

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
    ]

    const handleConvert = (auth: string) => {
        setPage(auth)
        navigate(`/auth?page=${auth}`);
    };

    useEffect(() => {
        setPage(searchParams.get('page'));
    }, [searchParams])

    

    return (
        <StyleContainer container>
            <StyleGridLeft item xs={6}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: 'calc(100% - 120px)'
                    }}
                >
                    <img src="/Images/auth/logo.png"
                        style={{
                            height: '100px'
                        }}
                    />
                </Box>
                <img src="/Images/auth/doctor_welcome.png"
                    style={{
                        height: '100%'
                    }}
                />
                <p
                    style={{
                        color: 'white',
                        fontSize: '14px',
                        margin: '0',
                    }}
                >Copyright &copy; 2024. My discounted Labs. All right reserved.</p>
            </StyleGridLeft>
            <StyleGridRight item xs={6}>
                <StyleBoxRadiusUI>
                    <StyleRadiusUI />
                </StyleBoxRadiusUI>
                <StyleBoxForm>
                    <StyleGroupInput variant="text" aria-label="Basic button group">
                        {
                            page == 'signup' ? <StyleButtonFocus>Sign Up</StyleButtonFocus> : <StyleButtonBlur onClick={() => handleConvert('signup')}>Sign Up</StyleButtonBlur>
                        }
                        {
                            page != 'signup' ? <StyleButtonFocus>Sign In</StyleButtonFocus> : <StyleButtonBlur onClick={() => handleConvert('signin')}>Sign In</StyleButtonBlur>
                        }
                    </StyleGroupInput>
                    {
                        page == 'signup' ? <SignUp /> : <SignIn />
                    }
                </StyleBoxForm>
                <StyleFooterForm>
                    <StyleGroupIcons>
                        {
                            iconsSocial.map((icon: any) => (
                                <a href={icon.href} key={icon.name}>
                                    <StyleIconsSocial src={icon.src} alt={icon.name} />
                                </a>
                            ))
                        }
                    </StyleGroupIcons>
                    <StyleGroupContact>
                        <StyleDetailContact>
                            <StyleIconPhone /> 
                            <p>+84708200334</p>
                        </StyleDetailContact>
                        <StyleDetailContact>
                            <StyleIconEmail />
                            <p>liorion.nguyen@gmail.com</p>
                        </StyleDetailContact>
                    </StyleGroupContact>
                </StyleFooterForm>
            </StyleGridRight>
        </StyleContainer>
    );
}