import { Avatar, Box, Button, CircularProgress, Drawer, Grid, MenuItem } from "@mui/material";
import { AvatarSizeMessMui, BoxCountEmoj, BoxImgContentMui, BoxImgReplyMui, BoxInputMessMui, BoxMessageMui, ButtonEmoji, ContentMessageMui, ContentMessageRightMui, DialogMui, EmojiCount, FeatureMessMui, FullNameMui, GridRoundDownMui, GridRoundTopMui, IconEmojiMui, LineHrMui, ListIconCallMessMui, ListIconMessMui, ListIconMessMui2, MainContentMessMui, MainContentReplyMui, MenuDetailMessMui, MenuEmoji, NameMessageMui, OneMessageMui, PopoverMui, StyleBoxCenter, StyleBoxNoDataMess, StyleBoxTitleMess, StyleBtnHidden, StyleTextNoDataMess, StyleTxtTyping, TextareaAutosizeMui, TitleMessageMui, UserActiveMui, VisuallyHiddenInput } from "../style-mui";
import SendIcon from '@mui/icons-material/Send';
import { Fragment, useEffect, useRef, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClearIcon from '@mui/icons-material/Clear';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import SendMessageIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import RenameIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BlockIcon from '@mui/icons-material/PersonOffOutlined';
import LimitIcon from '@mui/icons-material/CommentsDisabledOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReportIcon from '@mui/icons-material/ReportProblemOutlined';
import TopicIcon from '@mui/icons-material/WhatshotOutlined';
import { StyleRowGap20, StyleRowGap5 } from "../style-mui";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { MessageActions } from "../../../../../redux/advise";
import ThemeMessage from "../function/theme";
import NickName from "../function/nickname";
import EmotionalMessage from "../function/emotional";
import Gif from "../function/gif";
import Icon from "../function/icon";
import { useNavigate } from "react-router-dom";
import { request } from "../../../../../api/request";

interface BoxMessage {
    messages: Message[];
    author: Contact;
    audiences: Contact;
    basicinformation: BasicInformation;
}

interface Message {
    id?: string;
    content?: string,
    createAt?: string,
    reply?: {
        id: string,
        content: string,
    },
    emoji?: Emotional[],
    creator?: boolean,
}

interface Contact {
    id: string,
    name: string,
    avt: string,
}

interface Emotional {
    creator?: boolean,
    type: string,
}

interface Nickname {
    author: string,
    audiences: string,
}

interface BasicInformation {
    theme: string;
    emotional: string;
    nickname: Nickname;
}

export default function ChatBox(props: BoxMessage) {
    const { messages, author, audiences, basicinformation } = props;
    const [listMessages, setListMessages] = useState(messages);
    const [chat, setChat] = useState([]);
    const navigate = useNavigate();
    const idBoxChat = useSelector((state: any) => state.message.choose);
    const userInfo = useSelector((state: any) => state.user.user);
    
    useEffect(() => {
        setListMessages(messages);
    }, [props])
    const feeling = [{ name: "Like", src: '/Images/chat/emoji/like.png' }, { name: "Love", src: '/Images/chat/emoji/love.png' }, { name: "Haha", src: '/Images/chat/emoji/haha.png' }, { name: "Wow", src: '/Images/chat/emoji/wow.png' }, { name: "Sad", src: '/Images/chat/emoji/sad.png' },];

    const dispatch = useDispatch();
    const [inpMess, setInpMess] = useState(false);
    const [checkBoxClick, setCheckBoxClick] = useState(true);
    const [valueMess, setValueMess] = useState('');
    const [reply, setReply] = useState<Message>();
    const [emoji, setEmoji] = useState(-1);
    const [openTheme, setOpenTheme] = useState(false);
    const [openNickName, setOpenNickName] = useState(false);
    const [openEmoji, setOpenEmoji] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const messageListRef = useRef<HTMLTextAreaElement | null>(null);
    const BoxMessageRef = useRef<HTMLTextAreaElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElBoxGif, setAnchorElBoxGif] = useState<null | HTMLElement>(null);
    const [anchorElBoxDetail, setAnchorElBoxDetail] = useState<null | HTMLElement>(null);
    const [anchorElBoxIcon, setAnchorElBoxIcon] = useState<null | HTMLElement>(null);
    const [colorTheme, setColorTheme] = useState(1);
    const [theme, setTheme] = useState(basicinformation.theme);
    const open = Boolean(anchorEl);
    const inpicon = useSelector((state: any) => state.message.icon);
    const detail = useSelector((state: any) => state.message.detail);
    const gif = useSelector((state: any) => state.message.gif);
    const basicInformation = useSelector((state: any) => state.message.basicinformation);
    const [modeSend, setModeSend] = useState(false);
    const [loadingDelete, setLoadingdelete] = useState(false);
    const [idBoxChatAi, setIdBoxChatAi] = useState(null);

    const handleBoxClick = () => {
        if (checkBoxClick) {
            setInpMess(true);
            setCheckBoxClick(false);
            inputRef.current?.focus();
        }
    }

    const handleReply = (message: object) => {
        inputRef.current?.focus();
        setReply(message)
    }

    const handleDeleteReply = () => {
        setReply({})
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setEmoji(id);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setEmoji(-1)
        setAnchorEl(null);
    };

    const handleClickOpenTheme = () => {
        dispatch(MessageActions.SetDetail('theme'));
        setOpenTheme(true);
    };

    const handleCloseTheme = () => {
        setOpenTheme(false);
    };

    const handleClickOpenNickName = () => {
        dispatch(MessageActions.SetDetail('nickname'));
        setOpenNickName(true);
    };

    const handleCloseNickName = () => {
        setOpenNickName(false);
    };

    const handleClickOpenEmoji = () => {
        dispatch(MessageActions.SetDetail('emoji'));
        setOpenEmoji(true);
    };

    const handleCloseEmoji = () => {
        setOpenEmoji(false);
    };

    const openBoxDetail = Boolean(anchorElBoxDetail);
    const handleClickBoxDetail = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxDetail(event.currentTarget);
    };
    const handleCloseBoxDetail = () => {
        setAnchorElBoxDetail(null);
    };

    const openBoxGif = Boolean(anchorElBoxGif);
    const handleClickBoxGif = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxGif(event.currentTarget);
    };
    const handleCloseBoxGif = () => {
        setAnchorElBoxGif(null);
    };

    const openBoxIcon = Boolean(anchorElBoxIcon);
    const handleClickBoxIcon = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBoxIcon(event.currentTarget);
    };

    const handleCloseBoxIcon = () => {
        setAnchorElBoxIcon(null);
    };

    const formatDateTime = (inputDateTime: string) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };

        const formattedDateTime = new Date(inputDateTime).toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

        return formattedDateTime;
    }

    const getLastRGBValue = (string: string): number[] => {
        const matches = string.match(/rgb\((\d+), (\d+), (\d+)\)/g);

        if (matches) {
            const lastMatch = matches[matches.length - 1];
            const match = lastMatch.match(/rgb\((\d+), (\d+), (\d+)\)/);

            if (match) {
                return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
            }
        }

        throw new Error(`Could not extract last RGB value from string: ${string}`);
    }

    const getRGBColorsFromGradientString = (gradientString: string) => {
        const matches = gradientString.match(/rgb\((\d+), (\d+), (\d+)\)/g);

        if (matches) {
            const rgbColors = matches.map(match => {
                const values = match.match(/rgb\((\d+), (\d+), (\d+)\)/);
                if (values) {
                    return `rgb(${values[1]}, ${values[2]}, ${values[3]})`;
                }
                return null;
            }).filter(Boolean);

            return rgbColors;
        }
        return [];
    }

    const handleSendAi = async (mess: string) => {
        const moment = require('moment-timezone');
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
        const currentTimeInVietnam = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        let messPush = {};

        if (reply && Object.keys(reply).length !== 0) {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                reply: {
                    id: reply.id,
                    content: reply.content,
                },
                emoji: [],
                creator: true,
                userId: userInfo._id
            }
        } else {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                emoji: [],
                creator: true,
                userId: userInfo._id
            }
        };
        setListMessages((prevMessages: any) => [...prevMessages, messPush]);
        setModeSend(true);
        const newListMessages = [...listMessages, messPush];
        let dataFetch = {
            id: userInfo._id,
            boxId: idBoxChat?._id || idBoxChatAi,
            content: [] as { role: string; parts: { text: any; }[] }[]
        };

        newListMessages.forEach((content: any) => {
            dataFetch.content.push({
                role: content.creator ? "user" : "model",
                parts: [{ text: content.content }]
            });
        });

        let newResultChatAi = newListMessages;

        const fetchMess = async () => {
            const response = await request("POST", dataFetch, `message/chatAi`);

            setIdBoxChatAi(response.boxId);
            const newMessage = response;
            newResultChatAi.push({
                id: newMessage.id,
                content: newMessage.content,
                createAt: newMessage.createAt,
                emoji: [],
                creator: false,
                userId: "66cfd416b79c190c7e9a7f1f",
            });

            setListMessages(newResultChatAi);
            setModeSend(false);
        };
        setValueMess('');
        setReply({});
        fetchMess();
    }

    const handleSend = async (mess: string) => {
        const moment = require('moment-timezone');
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
        const currentTimeInVietnam = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        let messPush = {};
        let dataFetch = {}
        if (reply && Object.keys(reply).length !== 0) {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                reply: {
                    id: reply.id,
                    content: reply.content,
                },
                emoji: [],
                creator: true,
                userId: userInfo._id
            }
            dataFetch = {
                id: userInfo._id,
                boxId: idBoxChat._id,
                reply: {
                    id: reply.id,
                    content: reply.content,
                },
                content: mess
            };
        } else {
            messPush = {
                id: uuidv4(),
                content: convertNewlinesToBreaks(mess),
                createAt: currentTimeInVietnam,
                emoji: [],
                creator: true,
                userId: userInfo._id
            }
            dataFetch = {
                id: userInfo._id,
                boxId: idBoxChat._id,
                content: mess
            };
        };
        
        setListMessages((prevMessages: any) => [...prevMessages, messPush]);
        setModeSend(true);
        const fetchMess = async () => {
            const response = await request("POST", dataFetch, `message`);
            setModeSend(false);
        };
        setValueMess('');
        setReply({});
        fetchMess();
    };

    const convertNewlinesToBreaks = (text: string) => {
        const result = text.replace(/\n/g, '<br>');
        return result;
    }

    const handleSendIcon = () => {
        setModeSend(true);
        const moment = require('moment-timezone');
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
        const currentTimeInVietnam = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        const newAddMessage = {
            id: uuidv4(),
            content: basicInformation.emoji || basicinformation.emotional,
            createAt: currentTimeInVietnam,
            emoji: [],
            creator: true,
            userId: userInfo._id 
        }
        const newListMessages = [...listMessages, newAddMessage];
        const fetchMess = async () => {
            const res = await request("POST", {
                id: userInfo._id,
                boxId: idBoxChat._id,
                content: basicInformation.emoji || basicinformation.emotional
            }, `message`);
            setModeSend(false);
        };
        fetchMess();

        setListMessages(newListMessages);
    }

    const handlefeeling = (i: number, feelpush: any) => {
        const newListMessages = [...listMessages];

        const existingEmoji = newListMessages[i].emoji?.find(
            (emoji: any) => emoji.creator === feelpush.creator
        );

        if (existingEmoji) {
            existingEmoji.type = feelpush.type;
        } else {
            newListMessages[i].emoji?.push(feelpush);
        }

        setListMessages(newListMessages);
    };

    const extractImageUrl = (inputString: string) => {
        const matches = inputString.match(/https:\/\/[^ ]+/);
        if (matches && matches.length > 0) {
            return matches[0];
        } else {
            return "";
        }
    }

    const handleStartMess = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    useEffect(() => {
        if (inpicon) {
            const inp = valueMess + inpicon;
            setValueMess(inp);
            inputRef.current?.focus();
        }
    }, [inpicon]);

    useEffect(() => {
        if (basicInformation.theme != "") setTheme(basicInformation.theme);

        const string = theme;
        const rgbValue = getLastRGBValue(string);
        const rgbColors = getRGBColorsFromGradientString(string);
        setColorTheme(rgbColors.length);
        rgbColors.map((rgb, index) => {
            document.documentElement.style.setProperty(`--theme-${index}`, rgb);
        })

        document.documentElement.style.setProperty('--theme', `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`);
    }, [theme, basicInformation.theme]);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [listMessages]);

    useEffect(() => {
        if (detail !== "theme") handleCloseTheme();
        if (detail !== "nickname") handleCloseNickName();
        if (detail !== "emoji") handleCloseEmoji();
    }, [detail])

    useEffect(() => {
        if (gif) {
            setAnchorElBoxGif(null);
            handleSend(`img: ${gif}`);
            dispatch(MessageActions.SetGif(''));
        }
    }, [gif])

    const handleDeleteBoxChat = async () => {
        if (idBoxChat) {
            setLoadingdelete(true);
            await request("DELETE", "", `message/${idBoxChat._id}`);
            dispatch(MessageActions.SetChoose(""));
            setLoadingdelete(false);
        }
        handleCloseBoxDetail();
    }

    const handleCloseBox = () => {
        dispatch(MessageActions.SetChoose(""));
    }

    return (
        <BoxMessageMui onClick={handleBoxClick} ref={BoxMessageRef}>
            <FeatureMessMui>
                <StyleBoxTitleMess>
                    <StyleRowGap20>
                        <Avatar alt={audiences.name} src={audiences.avt} />
                        <StyleRowGap5 className="extendBox">
                            <TitleMessageMui>
                                <FullNameMui>{basicInformation.nickname.audiences || basicinformation.nickname.audiences || audiences.name}</FullNameMui>
                                {
                                    modeSend ? <StyleTxtTyping>Chatbox is composing a message...</StyleTxtTyping> : <UserActiveMui>Is active</UserActiveMui>
                                }
                            </TitleMessageMui>
                            <StyleBtnHidden onClick={handleClickBoxDetail}>
                                <ExpandMoreIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                            </StyleBtnHidden>

                            <MenuDetailMessMui
                                id="basic-menu-BoxDetail"
                                anchorEl={anchorElBoxDetail}
                                open={openBoxDetail}
                                onClose={handleCloseBoxDetail}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ opacity: openTheme || openEmoji || openNickName ? '0' : '1' }}
                            >
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <SendMessageIcon />
                                    <p>Open in Messages</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <ProfileIcon />
                                    <p>View personal page</p>
                                </MenuItem>
                                <LineHrMui />
                                <Box>
                                    <MenuItem onClick={() => { handleClickOpenTheme(); }}>
                                        <TopicIcon />
                                        <p>Change theme</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openTheme}
                                        onClose={handleCloseTheme}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <ThemeMessage theme={basicinformation.theme} />
                                    </DialogMui>
                                </Box>

                                <Box>
                                    <MenuItem onClick={() => { dispatch(MessageActions.SetFunction('Expressing emotions')); handleClickOpenEmoji(); }}>
                                        <SentimentSatisfiedAltIcon />
                                        <p>Expressing emotions</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openEmoji}
                                        onClose={handleCloseEmoji}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <EmotionalMessage emoji={basicinformation.emotional} />
                                    </DialogMui>
                                </Box>

                                <Box>
                                    <MenuItem onClick={() => { handleClickOpenNickName(); }}>
                                        <RenameIcon />
                                        <p>Nickname</p>
                                    </MenuItem>
                                    <DialogMui
                                        open={openNickName}
                                        onClose={handleCloseNickName}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <NickName nickname={(basicInformation.nickname.author || basicInformation.nickname.audiences) ? basicInformation.nickname : basicinformation.nickname} author={author} audiences={audiences} />
                                    </DialogMui>
                                </Box>
                                <LineHrMui />
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <NotificationIcon />
                                    <p>Turn off notifications</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <BlockIcon />
                                    <p>Block</p>
                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <LimitIcon />
                                    <p>Limit</p>
                                </MenuItem>
                                <LineHrMui />
                                <MenuItem onClick={handleDeleteBoxChat}>
                                    {
                                        loadingDelete ? <StyleBoxCenter><CircularProgress sx={{ width: '30px !important', height: '30px !important' }} /></StyleBoxCenter> : <>
                                            <DeleteIcon />
                                            <p>Delete chat</p>
                                        </>
                                    }

                                </MenuItem>
                                <MenuItem onClick={handleCloseBoxDetail}>
                                    <ReportIcon />
                                    <p>Report</p>
                                </MenuItem>
                            </MenuDetailMessMui>
                        </StyleRowGap5>
                    </StyleRowGap20>
                    <ListIconCallMessMui>
                        <CallIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        <VideocamIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                        <ClearIcon onClick={handleCloseBox} className={inpMess ? 'iconActive' : 'iconInactive'} />
                    </ListIconCallMessMui>
                </StyleBoxTitleMess>
            </FeatureMessMui>

            <ContentMessageMui ref={messageListRef}>
                <Box>
                    {
                        listMessages.length === 0 ?
                            <StyleBoxNoDataMess>
                                <StyleTextNoDataMess>How can I help you today?</StyleTextNoDataMess>
                                <Button variant="outlined" onClick={handleStartMess}>
                                    Start a conversation
                                    <PlayArrowIcon />
                                </Button>
                            </StyleBoxNoDataMess>
                            :
                            <>
                                {listMessages.map((message: any, index: number) => (
                                    <OneMessageMui key={message.id} className={message && message.userId === userInfo._id ? 'me' : 'you'}>
                                        <AvatarSizeMessMui alt={audiences.name} src={audiences.avt} />
                                        <Box className="main-right">
                                            <ContentMessageRightMui className={message && message.userId === userInfo._id ? 'me' : 'you'}>
                                                <NameMessageMui className="nameAuthor">{basicInformation.nickname.audiences || basicinformation.nickname.audiences || audiences.name}</NameMessageMui>
                                                {message.reply && <Box className="replyMessage">
                                                    {
                                                        message.reply.content?.includes('img:') &&
                                                        extractImageUrl(message.reply.content || "") && (
                                                            <BoxImgReplyMui sx={{ backgroundImage: `url("${extractImageUrl(message.reply.content || "") || ""}") !important`, }}></BoxImgReplyMui>
                                                        )
                                                    }
                                                    {
                                                        !message.reply.content?.includes('img:') && (
                                                            <MainContentReplyMui> <p className="replyContent" dangerouslySetInnerHTML={{ __html: message.reply.content || "" }}></p> </MainContentReplyMui>
                                                        )
                                                    }
                                                </Box>}
                                                {
                                                    message.content?.includes('img:') &&
                                                    extractImageUrl(message.content || "") && (
                                                        <BoxImgContentMui sx={{ backgroundImage: `url("${extractImageUrl(message.content || "") || ""}") !important`, }}></BoxImgContentMui>
                                                    )
                                                }
                                                {
                                                    !message.content?.includes('img:') && (
                                                        <MainContentMessMui dangerouslySetInnerHTML={{ __html: message.content || "" }} className={`contentMessage theme${index % colorTheme}`}></MainContentMessMui>
                                                    )
                                                }

                                                {(message.emoji?.length || 0) > 0 &&
                                                    <BoxCountEmoj className="count-emoji">
                                                        <p>{message.emoji?.length}</p>
                                                        {message.emoji && message.emoji.map((typeEmoji: any, i: number) => (
                                                            <Fragment key={i}>
                                                                {typeEmoji.type === "Love" && <EmojiCount src='/Images/chat/emoji/love.png' alt="Love" />}
                                                                {typeEmoji.type === "Like" && <EmojiCount src='/Images/chat/emoji/like.png' alt="Like" />}
                                                                {typeEmoji.type === "Haha" && <EmojiCount src='/Images/chat/emoji/haha.png' alt="Haha" />}
                                                                {typeEmoji.type === "Sad" && <EmojiCount src='/Images/chat/emoji/sad.png' alt="Sad" />}
                                                                {typeEmoji.type === "Wow" && <EmojiCount src='/Images/chat/emoji/wow.png' alt="Wow" />}
                                                            </Fragment>
                                                        ))}
                                                    </BoxCountEmoj>
                                                }
                                                <p className="details-time-message">{formatDateTime(message.createAt || "")}</p>
                                            </ContentMessageRightMui>
                                            <Box className="extension">
                                                <ButtonEmoji className="extensionChird"
                                                    onClick={(e: any) => handleClick(e, index)}
                                                >
                                                    <p className="details-extensionChird">Flying to oranges</p>
                                                    <SentimentSatisfiedAltIcon className="iconInactive" />
                                                </ButtonEmoji>
                                                <MenuEmoji
                                                    className="emoji"
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open && index === emoji}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    {feeling.map((feel, i) => (
                                                        <IconEmojiMui
                                                            key={i}
                                                            src={feel.src}
                                                            onClick={() => {
                                                                handlefeeling(index, { creator: true, type: feel.name });
                                                                handleClose();
                                                            }}
                                                        />
                                                    ))}

                                                </MenuEmoji>
                                                <Box className="extensionChird">
                                                    <p className="details-extensionChird">Reply</p>
                                                    <ReplyIcon className="iconInactive" onClick={() => handleReply(message)} />
                                                </Box>
                                                <Box className="extensionChird">
                                                    <p className="details-extensionChird">See more</p>
                                                    <MoreVertIcon className="iconInactive" />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </OneMessageMui>
                                ))}
                            </>
                    }
                </Box>

                {
                    reply &&
                    <Box className={Object.keys(reply).length !== 0 ? 'show-reply reply' : 'reply'}>
                        <Box className="replyTitle">
                            <p>Answering <b>{reply.creator ? 'self' : audiences.name}</b></p>
                            <ClearIcon className="iconInactive" onClick={handleDeleteReply} />
                        </Box>
                        {
                            reply.content?.includes('img:') &&
                            extractImageUrl(reply.content || "") && (
                                <BoxImgReplyMui sx={{ backgroundImage: `url("${extractImageUrl(reply.content || "") || ""}") !important` }}></BoxImgReplyMui>
                            )
                        }
                        {
                            !reply.content?.includes('img:') && (
                                <p className="replyContent" dangerouslySetInnerHTML={{ __html: reply.content || "" }}></p>
                            )
                        }
                    </Box>
                }
            </ContentMessageMui>

            <FeatureMessMui>
                <GridRoundDownMui container spacing={2}>
                    <Grid item sm={valueMess.length == 0 ? 2.5 : 0.5} xs={valueMess.length == 0 ? 4.5 : 1} className="p-10">
                        <ListIconMessMui2>
                            <Button
                                sx={{
                                    'span': {
                                        marginLeft: '0',
                                        marginRight: '0',
                                    },
                                    minWidth: 'auto',
                                    padding: '0'
                                }}
                                component="label" startIcon={<AddCircleOutlineIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                            </Button>

                            {
                                valueMess.length == 0 && (
                                    <>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component='label' startIcon={<AttachFileIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                        <Button
                                            sx={{
                                                'span': {
                                                    marginLeft: '0',
                                                    marginRight: '0',
                                                },
                                                minWidth: 'auto',
                                                padding: '0'
                                            }}
                                            component="label" startIcon={<ImageIcon className={inpMess ? 'iconActive' : 'iconInactive'} />}>
                                            <VisuallyHiddenInput type="file" accept="image/*" onChange={(e: any) => {
                                                console.log(e.target.value);
                                            }} />
                                        </Button>
                                        <Box>
                                            <Box onClick={handleClickBoxGif}>
                                                <GifBoxOutlinedIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                                            </Box>
                                            <PopoverMui
                                                anchorEl={anchorElBoxGif}
                                                open={openBoxGif}
                                                onClose={handleCloseBoxGif}
                                            >
                                                <Gif />
                                            </PopoverMui>
                                        </Box>

                                    </>
                                )
                            }
                        </ListIconMessMui2>
                    </Grid>
                    <Grid item sm={valueMess.length == 0 ? 9 : 11} xs={valueMess.length == 0 ? 6.5 : 10}>
                        <BoxInputMessMui>
                            <TextareaAutosizeMui
                                minRows={1}
                                maxRows={2}
                                placeholder="Aa"
                                value={valueMess}
                                ref={inputRef}
                                onFocus={() => setInpMess(true)}
                                onBlur={() => setInpMess(false)}
                                onChange={(e: any) => setValueMess(e.target.value)}
                            />
                            <Box>
                                <Box onClick={(e: any) => { dispatch(MessageActions.SetFunction('GetIcon')); handleClickBoxIcon(e) }}>
                                    <SentimentSatisfiedAltIcon className={inpMess ? 'iconActive' : 'iconInactive'} />
                                </Box>
                                <PopoverMui
                                    anchorEl={anchorElBoxIcon}
                                    open={openBoxIcon}
                                    onClose={handleCloseBoxIcon}
                                >
                                    <Icon />
                                </PopoverMui>
                            </Box>
                        </BoxInputMessMui>
                    </Grid>
                    <Grid item sm={0.5} xs={1} className="p-10">
                        {
                            valueMess.length > 0 ? (
                                !idBoxChat || idBoxChat.contactUser.some((user: any) => user.userId === '66cfd416b79c190c7e9a7f1f') ? (
                                    <SendIcon className='iconActive' onClick={() => handleSendAi(valueMess)} />
                                ) : (
                                    <SendIcon className='iconActive' onClick={() => handleSend(valueMess)} />
                                )
                            ) : (
                                <p style={{ fontSize: '28px' }} onClick={handleSendIcon}>
                                    {basicInformation.emoji || basicinformation.emotional}
                                </p>
                            )
                        }
                    </Grid>
                </GridRoundDownMui>
            </FeatureMessMui>
        </BoxMessageMui >
    );
}