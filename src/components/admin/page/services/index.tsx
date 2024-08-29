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

interface ServicesData {
    id: string;
    name: string;
    numSampleSupport: number;
    room: string;
}

export default function Services() {
    const dispatch = useDispatch();

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'name',
        },
        {
            field: 'numSampleSupport',
            headerName: 'numSampleSupport',
        },
        {
            field: 'room',
            headerName: 'room',
        },

    ];
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<ServicesData[]>([]);
    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    const fetch = async () => {
        setLoading(true);
        try {
            const data = await request('GET', "", "services");
            const transformedData = transformData(data.data);
            setServices(transformedData);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleServices = (name: string) => {
        if (name === "update-services") {
            dispatch(DialogActions.setShowId(rowSelectionModel))
        }
        dispatch(DialogActions.setAdmin({
            show: true,
            name: name
        }))
    };

    const transformData = (data: ServicesData[]) => {
        return data.map((item: any) => ({
            id: item._id,
            name: item.name,
            numSampleSupport: item.numSampleSupport,
            room: item.room,
        }));
    };

    useEffect(() => {
        const pusher = new Pusher('ec6db52e2779d8691217', {
            cluster: 'ap1',
        });

        // Subscribe vào channel mà bạn muốn lắng nghe
        const channel = pusher.subscribe('services-channel');

        // Lắng nghe sự kiện 'Services-updated'
        channel.bind('services-updated', (datafake: any) => {
            const data = datafake.data;
            const updatedServices = services.map((item: any) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        name: data.name,
                        numSampleSupport: data.numSampleSupport,
                        room: data.room.map((r: any) => r).join(', '),
                    };
                }
                return item;
            });

            setServices(updatedServices);
        });
        channel.bind('services-created', (datafake: any) => {
            const data = datafake.data;

            let createdServices;
            createdServices = [{
                id: data.id,
                name: data.name,
                numSampleSupport: data.numSampleSupport,
                room: data.room.map((r: any) => r).join(', '),
            }, ...services];

            // Cập nhật state với dữ liệu đã thêm mới
            setServices(createdServices);
        });


        // Cleanup để ngắt kết nối Pusher khi component bị unmount
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [services]);

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
                    <StylePTitle>Services Manager</StylePTitle>
                    <StyleGroupButton>
                        <StyleButton variant="contained" color="success" disabled={rowSelectionModel.length === 0}
                            onClick={() => handleServices("update-services")}
                        >
                            <PreviewIcon />
                            <p>Details Service</p>
                        </StyleButton>
                        <StyleButton variant="contained" color="success"
                            onClick={() => handleServices("create-services")}
                        >
                            <AddCircleOutlineIcon />
                            <p>Create Service</p>
                        </StyleButton>
                    </StyleGroupButton>
                </Box>
                <StyleDataGrid
                    loading={loading}
                    numberRows={columns.length}
                    rows={services}
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