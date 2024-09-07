import { Box, Button, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { AvatarSizeMessMui, BoxInpNicknameMui, DialogContentMui, DialogTitleMui, InputNicknameMui } from "../../style-mui";
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from "react-redux";
import { MessageActions } from "../../../../../../redux/advise";

interface Contact {
    id: string,
    name: string,
    avt: string,
}
export interface Nickname {
    author: string,
    audiences: string,
}

export default function NickName(props: { nickname: Nickname, author: Contact, audiences: Contact }) {
    const [currentNickname, setCurrentNickname] = useState(props.nickname);
    
    const basicInformation = useSelector((state: any) => state.message.basicinformation);
    const authorRef = useRef<HTMLInputElement | null>(null);
    const audiencesRef = useRef<HTMLInputElement | null>(null);
    const [mode, setMode] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (mode === 'author') authorRef.current?.focus();
        if (mode === 'audiences') audiencesRef.current?.focus();
    }, [mode]);


    const handleCloseTheme = () => {
        dispatch(MessageActions.SetDetail(''));
    }

    const handleSave = () => {
        setMode('');

        dispatch(MessageActions.setBasicInformation({
            ...basicInformation, nickname: {
                author: currentNickname.author,
                audiences: currentNickname.audiences,
            }
        }));
    }


    return (
        <Box>
            <DialogTitleMui id="alert-dialog-title">
                {"Change nick name"}
            </DialogTitleMui>
            <DialogContentMui>
                <BoxInpNicknameMui onClick={() => { if (mode != 'audiences') setMode('audiences') }}>
                    <Box>
                        <AvatarSizeMessMui alt={props.audiences.name} src={props.audiences.avt} />
                    </Box>
                    <Box
                        sx={{
                            width: '-webkit-fill-available'
                        }}
                    >
                        {mode !== "audiences" ? <>
                            <h3 style={{ fontSize: '17px', fontWeight: 500, }}>{props.audiences.name}</h3>
                            <p
                                style={{ fontSize: '13px' }}
                            >{currentNickname.audiences || props.audiences.name}</p>
                        </> : <InputNicknameMui
                            value={currentNickname.audiences}
                            onChange={(e: any) => {
                                setCurrentNickname({
                                    author: currentNickname.author,
                                    audiences: e.target.value,
                                });
                            }}
                            type="text"
                            placeholder={`${currentNickname.audiences || props.audiences.name}`}
                            ref={audiencesRef}
                        />}

                    </Box>
                    {mode !== "audiences" ? <EditIcon /> : <CheckIcon onClick={handleSave} />}
                </BoxInpNicknameMui>
                <BoxInpNicknameMui onClick={() => { if (mode != 'author') setMode('author') }}>
                    <Box>
                        <AvatarSizeMessMui alt={props.author.name} src={props.author.avt} />
                    </Box>
                    <Box sx={{
                        width: '-webkit-fill-available'
                    }}>
                        {mode !== "author" ? <>
                            <h3 style={{ fontSize: '17px', fontWeight: 500, }}>{props.author.name}</h3>
                            <p style={{ fontSize: '13px' }}>{currentNickname.author || props.author.name}</p>
                        </> : <InputNicknameMui
                            value={currentNickname.author || props.author.name}
                            onChange={(e: any) => {
                                setCurrentNickname({
                                    author: e.target.value,
                                    audiences: currentNickname.audiences,
                                });
                            }}
                            type="text"
                            placeholder={`${currentNickname.author || props.author.name}`}
                            ref={authorRef}
                        />}

                    </Box>
                    {mode !== "author" ? <EditIcon /> : <CheckIcon onClick={handleSave} />}
                </BoxInpNicknameMui>
                <DialogActions>
                    <Button onClick={handleCloseTheme}>Cancel</Button>
                </DialogActions>
            </DialogContentMui>
        </Box>

    );
}