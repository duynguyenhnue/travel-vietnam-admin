import { Box } from "@mui/material";
import { useState } from "react";
import { getUsers } from "../../api/user";

export default function Home() {
    const [users, setUsers] = useState<any>([]);
    const fetchData = async () => {
        const data = await getUsers(1, 10, "");
        setUsers(data);
    }
    fetchData();
    return (
        <Box>
            <h1>Test DataBase</h1>
            {
                users
                &&
                users.data
                &&
                users.data.map((user: any, i: number) => (
                    <Box key={i}>
                        <p>Tài khoản {i+1}</p>
                        <p>Name: {user.fullName}</p>
                        <p>Name: {user.role}</p>
                    </Box>
                ))
            }
        </Box>
    );
}