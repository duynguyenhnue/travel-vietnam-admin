import { Box, Button } from "@mui/material";
import { StylePTitle } from "../../dashboard/style-mui";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { StyleBoxDataGrid, StyleButton, StyleDataGrid, StyleGroupButton } from "./style-mui";
import { DialogActions } from "../../../../redux/dialog";
import { useDispatch } from "react-redux";
import AlertDialog from "../../../dialog";
import PreviewIcon from '@mui/icons-material/Preview';
import { request } from "../../../../api/request";
import Pusher from 'pusher-js';

interface Roles {
    name: string;
    description: string[];
}

interface PermissionsData {
    id: string;
    name: string;
    role: Roles[];
    description: string;
}

export default function Permissions() {
    const dispatch = useDispatch();
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
        },
        {
            field: 'role',
            headerName: 'Role',
        },
        {
            field: 'description',
            headerName: 'Description',
            sortable: false,
        },
    ];
    const [loading, setLoading] = useState(true);
    const [permissions, setPermissions] = useState<PermissionsData[]>([]);
    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    const fetch = async () => {
        setLoading(true); // Bắt đầu tải dữ liệu
        try {
            const data = await request('GET', "", "permissions");
            const transformedData = transformData(data.data);
            setPermissions(transformedData);
        } catch (error) {
            console.error("Failed to fetch permissions:", error);
        } finally {
            setLoading(false); // Hoàn tất tải dữ liệu
        }
    };

    const handlePermissions = (name: string) => {
        if (name === "update-permissions") {
            dispatch(DialogActions.setShowId(rowSelectionModel))
        }
        dispatch(DialogActions.setAdmin({
            show: true,
            name: name
        }))
    };

    const transformData = (data: PermissionsData[]) => {
        return data.map((item: any) => ({
            id: item._id,
            name: item.name,
            role: item.role.map((r: any) => r.name).join(", "),
            description: item.description
        }));
    };

    useEffect(() => {
        const pusher = new Pusher('ec6db52e2779d8691217', {
            cluster: 'ap1',
        });

        // Subscribe vào channel mà bạn muốn lắng nghe
        const channel = pusher.subscribe('permissions-channel');

        // Lắng nghe sự kiện 'permissions-updated'
        channel.bind('permissions-updated', (datafake: any) => {
            const data = datafake.data;
            const updatedPermissions = permissions.map((item: any) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        name: data.name,
                        role: data.role.map((r: any) => r.name).join(', '),
                        description: data.description
                    };
                }
                return item;
            });

            setPermissions(updatedPermissions);
        });
        channel.bind('permissions-created', (datafake: any) => {
            const data = datafake.data;

            let createdPermissions;
            createdPermissions = [{
                id: data.id,
                name: data.name,
                role: data.role.map((r: any) => r.name).join(', '),
                description: data.description
            }, ...permissions];

            // Cập nhật state với dữ liệu đã thêm mới
            setPermissions(createdPermissions);
        });


        // Cleanup để ngắt kết nối Pusher khi component bị unmount
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [permissions]);

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
                    <StylePTitle>Permissions Manager</StylePTitle>
                    <StyleGroupButton>
                        <StyleButton variant="contained" color="success" disabled={rowSelectionModel.length === 0}
                            onClick={() => handlePermissions("update-permissions")}
                        >
                            <PreviewIcon />
                            <p>Details permission</p>
                        </StyleButton>
                        <StyleButton variant="contained" color="success"
                            onClick={() => handlePermissions("create-permissions")}
                        >
                            <AddCircleOutlineIcon />
                            <p>Create permission</p>
                        </StyleButton>
                    </StyleGroupButton>
                </Box>
                <StyleDataGrid
                    loading={loading}
                    numberRows={columns.length}
                    rows={permissions}
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