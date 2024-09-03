import { Box, Grid } from "@mui/material";
import { StyleBoxInteract, StyleBoxTitle, StyleGroupInteract, StyleSubTitle, StyleTitle } from "../page/home/style-mui";
import { useTranslation } from "react-i18next";

export default function News() {
    const news = [
        {
            id: "66abb7941cac1cff2a97bc81",
            title: "This Article’s Title goes Here, but not too long.",
            createdAt: '2024-08-01T16:26:25.916+00:00',
            view: 68,
            likes: 15,
            img: "/Images/home/home/news.svg"
        },
        {
            id: "66abb7941cac1cff2a97bc81",
            title: "This Article’s Title goes Here, but not too long.",
            createdAt: '2024-08-01T16:26:25.916+00:00',
            view: 68,
            likes: 15,
            img: "/Images/home/home/news.svg"
        },
        {
            id: "66abb7941cac1cff2a97bc81",
            title: "This Article’s Title goes Here, but not too long.",
            createdAt: '2024-08-01T16:26:25.916+00:00',
            view: 68,
            likes: 15,
            img: "/Images/home/home/news.svg"
        },
        {
            id: "66abb7941cac1cff2a97bc81",
            title: "This Article’s Title goes Here, but not too long.",
            createdAt: '2024-08-01T16:26:25.916+00:00',
            view: 68,
            likes: 15,
            img: "/Images/home/home/news.svg"
        }
    ]
    const { t } = useTranslation();

    return (
        <StyleBoxTitle>
            <StyleTitle>{t("Better information, Better health")}</StyleTitle>
            <StyleSubTitle>{t("News")}</StyleSubTitle>
            <Grid container spacing={6} rowSpacing={2}
                sx={{
                    display: 'flex',
                    marginTop: '50px'
                }}
            >
                {
                    news.map((item: any) => (
                        <Grid item xs={6}
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <img src={item.img} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '20px',
                                    backgroundColor: 'white',
                                    borderRadius: '5px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                    flex: '1',
                                }}
                            >
                                <Box>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: '#159EEC'
                                        }}
                                    >{item.createdAt}</p>
                                    <p
                                        style={{
                                            fontSize: '18px',
                                        }}
                                    >{item.title}</p>
                                </Box>

                                <StyleGroupInteract>
                                    <StyleBoxInteract>
                                        <img src="/Images/home/home/icon_view.svg" />
                                        <p>{item.view}</p>
                                    </StyleBoxInteract>
                                    <StyleBoxInteract>
                                        <img src="/Images/home/home/icon_like.svg" />
                                        <p>{item.likes}</p>
                                    </StyleBoxInteract>
                                </StyleGroupInteract>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </StyleBoxTitle>
    );
}