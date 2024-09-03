import { Box, Button, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxThemeMui, DialogContentMui, DialogTitleMui, GridThemeMui } from "../../style-mui";
import { MessageActions } from "../../../../../../redux/advise";

export default function ThemeMessage(props: { theme: string }) {
    const basicInformation = useSelector((state: any) => state.message.basicinformation);
    const [currentTheme, setCurrentTheme] = useState(props.theme);

    const themeColor = [
        "radial-gradient(circle at center 75%, rgb(98, 124, 24) 0%, rgb(91, 124, 12) 50%, rgb(85, 124, 0) 100%)",
        "radial-gradient(circle at center 75%, rgb(226, 34, 124) 0%, rgb(226, 34, 124) 50%, rgb(226, 34, 124) 100%)",
        "radial-gradient(circle at center 75%, rgb(8, 56, 23) 0%, rgb(19, 76, 36) 50%, rgb(29, 97, 49) 100%)",
        "radial-gradient(circle at center 75%, rgb(122, 7, 228) 0%, rgb(94, 4, 186) 50%, rgb(63, 0, 140) 100%)",
        "radial-gradient(circle at center 75%, rgb(0, 197, 197) 0%, rgb(1, 180, 175) 50%, rgb(2, 164, 154) 100%)",
        "radial-gradient(circle at center 75%, rgb(85, 208, 255) 0%, rgb(117, 151, 215) 33%, rgb(255, 159, 179) 66%, rgb(255, 159, 179) 99%)",
        "radial-gradient(circle at center 75%, rgb(250, 175, 0) 0%, rgb(255, 46, 46) 50%, rgb(58, 18, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 0, 0) 0%, rgb(255, 165, 0) 33%, rgb(255, 255, 0) 66%, rgb(0, 128, 0) 99%)",
        "radial-gradient(circle at center 75%, rgb(0, 0, 255) 0%, rgb(0, 128, 255) 50%, rgb(128, 0, 128) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 0, 255) 0%, rgb(128, 0, 128) 50%, rgb(255, 255, 0) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 128, 0) 0%, rgb(128, 255, 0) 50%, rgb(0, 0, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(0, 255, 255) 0%, rgb(255, 0, 255) 50%, rgb(255, 255, 0) 100%)",
        "radial-gradient(circle at center 75%, rgb(128, 128, 128) 0%, rgb(192, 192, 192) 50%, rgb(255, 255, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 50%, rgb(0, 0, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 255, 0) 0%, rgb(0, 255, 0) 50%, rgb(0, 0, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(128, 0, 0) 0%, rgb(0, 128, 0) 50%, rgb(0, 0, 128) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 50%, rgb(128, 128, 128) 100%)",
        "radial-gradient(circle at center 75%, rgb(255, 128, 0) 0%, rgb(128, 0, 255) 50%, rgb(0, 255, 128) 100%)",
        "radial-gradient(circle at center 75%, rgb(0, 255, 128) 0%, rgb(128, 128, 0) 50%, rgb(0, 128, 255) 100%)",
        "radial-gradient(circle at center 75%, rgb(128, 128, 128) 0%, rgb(192, 0, 0) 50%, rgb(255, 192, 0) 100%)",
    ];

    const dispatch = useDispatch();

    const handleCloseTheme = () => {
        dispatch(MessageActions.SetDetail(''));
    }

    const handleSave = () => {
        dispatch(MessageActions.setBasicInformation({...basicInformation, theme: currentTheme}));
        handleCloseTheme();
    }

    return (
        <Box>
            <DialogTitleMui id="alert-dialog-title">
                {"Theme"}
            </DialogTitleMui>
            <DialogContentMui>
                <Grid container>
                    {
                        themeColor.map((theme, index) => (
                            <GridThemeMui item xs={2} key={index} sx={{background: theme === currentTheme ? '#d7d7d7' : ""}} onClick={() => setCurrentTheme(theme)}>
                                <BoxThemeMui sx={{backgroundImage: theme,}}></BoxThemeMui>
                            </GridThemeMui>
                        ))
                    }
                </Grid>
            </DialogContentMui>
            <DialogActions>
                <Button onClick={handleCloseTheme}>Cancel</Button>
                <Button onClick={handleSave} autoFocus>Save</Button>
            </DialogActions>
        </Box>

    );
}