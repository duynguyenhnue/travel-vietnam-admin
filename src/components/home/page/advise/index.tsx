import { useEffect, useState } from "react";
import { Grid, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import ChatBox from "./message";
import { request } from "../../../../api/request";
import ChatAiExtra from "./list-messages";

export default function Advise() {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<any[]>([]);
    const [author, setAuthor] = useState<any>(null);
    const [audiences, setAudiences] = useState<any>(null);
    const [basicinformation, setBasicinformation] = useState<any>();
    const userInfo = useSelector((state: any) => state.user.user);
    const BoxChat = useSelector((state: any) => state.message.choose);
    

    useEffect(() => {
        const fetchData = async () => {
            let name = "";
            BoxChat.contactUser.forEach((user: any) => {
                if (user.userId !== userInfo._id) {
                    name = user.nickName;
                }
            });
            setAuthor({
                id: userInfo._id,
                name: userInfo.fullName,
                avt: userInfo.profileImage,
            })
            if (BoxChat.contactUser.length == 2) {
                setAudiences({
                    id: BoxChat._id,
                    name: name,
                    avt: BoxChat.profileImage || '/Images/admin/header/profile.svg',
                })
            }
            setBasicinformation({
                theme: BoxChat.theme,
                emotional: BoxChat.emotional,
                nickname: {
                    author: '',
                    audiences: '',
                }
            })
            const datafake = await request("GET", "", `message/${BoxChat._id}`);
            

            setMessages([]);
            if (Array.isArray(datafake)) {
                datafake.forEach((item: any) => {
                    setMessages(prevMessages => [...prevMessages, {
                        id: item._id,
                        content: item.content,
                        createAt: item.createdAt,
                        emoji: item.emoji,
                        creator: item.userId === userInfo.id ? true : false,
                        reply: item.reply,
                        userId: item.userId
                    }]);
                });
            }
            setLoading(false);
        }
        if (BoxChat && userInfo) {
            fetchData();
        } else if (userInfo) {
            setMessages([]);
            setAuthor({
                id: userInfo.id,
                name: userInfo.fullName,
                avt: userInfo.profileImage,
            })
            setAudiences({
                id: 'liorionAi',
                name: 'ChatBox AI',
                avt: '/Images/auth/logo.png',
            })
            setBasicinformation({
                theme: "radial-gradient(circle at center 75%, rgb(85, 208, 255) 0%, rgb(117, 151, 215) 33%, rgb(255, 159, 179) 66%, rgb(255, 159, 179) 99%)",
                emotional: "😮",
                nickname: {
                    author: '',
                    audiences: '',
                }
            })
            setLoading(false);
        }
    }, [BoxChat, userInfo])

    return (
        <Grid container spacing={2}
            sx={{
                height: '800px'
            }}
        >
            <Grid item xs={3} md={3}
                sx={{
                    height: '100%'
                }}
            >
                <ChatAiExtra />
            </Grid>
            <Grid item xs={9} md={9}
                sx={{
                    height: '100%'
                }}
            >
                {loading ? <LinearProgress sx={{ width: "100%" }} /> : <ChatBox
                    messages={messages}
                    author={author}
                    audiences={audiences}
                    basicinformation={basicinformation}
                />}
            </Grid>
        </Grid>
    );
}