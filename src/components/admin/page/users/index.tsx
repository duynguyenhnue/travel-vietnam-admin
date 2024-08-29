import { Box, Button } from "@mui/material";
import { StylePTitle } from "../../dashboard/style-mui";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { StyleBoxDataGrid, StyleButton, StyleDataGrid, StyleGroupButton } from "../permissions/style-mui";
import { DialogActions } from "../../../../redux/dialog";
import { useDispatch } from "react-redux";
import AlertDialog from "../../../dialog";
import PreviewIcon from '@mui/icons-material/Preview';
import { request } from "../../../../api/request";
import Pusher from 'pusher-js';

interface UsersData {
    id: string;
    fullName: string;
    email: string;
    role: string;
    isActive: string;
    cccdNumber: string;
}

export default function Users() {
    const dispatch = useDispatch();

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'cccdNumber',
            headerName: 'cccdNumber',
        },
        {
            field: 'fullName',
            headerName: 'FullName',
        },
        {
            field: 'email',
            headerName: 'Email',
        },
        {
            field: 'role',
            headerName: 'Role',
        },

    ];
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<UsersData[]>([]);
    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    const fetch = async () => {
        setLoading(true);
        try {
            const data = await request('GET', "", "users");
            const transformedData = transformData(data.data);
            setUsers(transformedData);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUsers = (name: string) => {
        if (name === "update-users") {
            dispatch(DialogActions.setShowId(rowSelectionModel))
        }
        dispatch(DialogActions.setAdmin({
            show: true,
            name: name
        }))
    };

    const transformData = (data: UsersData[]) => {
        return data.map((item: any) => ({
            id: item._id,
            cccdNumber: item.cccdNumber,
            fullName: item.fullName,
            email: item.email,
            role: item.role,
            isActive: item.isActive
        }));
    };

    useEffect(() => {
        const pusher = new Pusher('ec6db52e2779d8691217', {
            cluster: 'ap1',
        });

        // Subscribe vào channel mà bạn muốn lắng nghe
        const channel = pusher.subscribe('users-channel');

        // Lắng nghe sự kiện 'Users-updated'
        channel.bind('users-updated', (datafake: any) => {
            const data = datafake.data;
            const updatedUsers = users.map((item: any) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        cccdNumber: data.cccdNumber,
                        fullName: data.fullName,
                        email: data.email,
                        role: data.role,
                        isActive: data.isActive
                    };
                }
                return item;
            });

            setUsers(updatedUsers);
        });
        channel.bind('users-created', (datafake: any) => {
            const data = datafake.data;

            let createdUsers;
            createdUsers = [{
                id: data.id,
                cccdNumber: data.cccdNumber,
                fullName: data.fullName,
                email: data.email,
                role: data.role,
                isActive: data.isActive
            }, ...users];

            // Cập nhật state với dữ liệu đã thêm mới
            setUsers(createdUsers);
        });


        // Cleanup để ngắt kết nối Pusher khi component bị unmount
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [users]);

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '-webkit-fill-available',
                display: 'flex',
                gap: '30px',
                flexDirection: 'column',
                overflowY: 'auto',
                marginBottom: '70px'
            }}
        >
            <StyleBoxDataGrid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <StylePTitle>Users Manager</StylePTitle>
                    <StyleGroupButton>
                        <StyleButton variant="contained" color="success" disabled={rowSelectionModel.length === 0}
                            onClick={() => handleUsers("update-users")}
                        >
                            <PreviewIcon />
                            <p>Details user</p>
                        </StyleButton>
                        <StyleButton variant="contained" color="success"
                            onClick={() => handleUsers("create-users")}
                        >
                            <AddCircleOutlineIcon />
                            <p>Create user</p>
                        </StyleButton>
                    </StyleGroupButton>
                </Box>
                <StyleDataGrid
                    loading={loading}
                    numberRows={columns.length}
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    rowSelectionModel={rowSelectionModel}
                    onRowSelectionModelChange={(e: any) => setRowSelectionModel(e)}
                />
            </StyleBoxDataGrid>
            <AlertDialog />
        </Box>
    );
}