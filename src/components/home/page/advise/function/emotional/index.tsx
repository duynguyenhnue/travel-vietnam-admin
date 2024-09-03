import { Box, Button, DialogActions } from "@mui/material";
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux";
import { BoxCoverRMMui, BoxRemoveMui, DialogContentMui, DialogTitleMui } from "../../style-mui";
import { MessageActions } from "../../../../../../redux/advise";
import Icon from "../icon";

export default function EmotionalMessage(props: { emoji: string }) {
    const basicInformation = useSelector((state: any) => state.message.basicinformation);

    const [currentEmoji, setCurrentEmoji] = useState(props.emoji);

    const emoji = useSelector((state: any) => state.message.emoji);

    const dispatch = useDispatch();

    const handleCloseEmoji = () => {
        dispatch(MessageActions.SetDetail(''));
    }

    const handleSave = () => {
        dispatch(MessageActions.setBasicInformation({...basicInformation, emoji: currentEmoji}));
        handleCloseEmoji();
    }

    useEffect(() => {
        if (emoji) setCurrentEmoji(emoji);
    }, [emoji])

    return (
        <Box>
            <DialogTitleMui id="alert-dialog-title">
                {"Emoji"}
            </DialogTitleMui>
            <DialogContentMui>
                <BoxCoverRMMui>
                    <Box>
                        <p style={{ fontSize: '17px', fontWeight: '500' }}>Represent current emotions</p>
                        <p style={{ fontSize: '26px' }}>{currentEmoji}</p>
                    </Box>
                    <BoxRemoveMui onClick={() => setCurrentEmoji(props.emoji)}>
                        <ClearIcon />
                        <p>Remove</p>
                    </BoxRemoveMui>
                </BoxCoverRMMui>
                <Icon />
            </DialogContentMui>
            <DialogActions>
                <Button onClick={handleCloseEmoji}>Cancel</Button>
                <Button onClick={handleSave} autoFocus>Save</Button>
            </DialogActions>
        </Box>

    );
}