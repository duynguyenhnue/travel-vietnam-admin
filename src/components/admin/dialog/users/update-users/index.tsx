import { Box, Button, MenuItem, Select, SelectChangeEvent, TextareaAutosize } from "@mui/material";
import { StyleAutocomplete, StyleBoxInput, StyleButton, StyleFormControl, StyleInput, StyleLabel, StyleLineDashed, StyleScrollY, StyleSubtitle, StyleTextareaAutosize, StyleTitle } from "../../../../dialog/style-mui";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarActions } from "../../../../../redux/snackbar";
import { request } from "../../../../../api/request";
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function UpdateUser() {
    const [roles, setRoles] = useState([
        "Admin",
        "Parient",
        "Doctor",
        "Receptionist"
    ])
    const [gender, setGender] = useState([
        "Male",
        "Female",
        "Other"
    ])
    const ids = useSelector((state: any) => state.dialog.showId);
    const id = ids[0];

    const [dataUser, setDataUser] = useState<any>();

    const dispatch = useDispatch();

    const handleUpdateUser = async () => {
        const fetch = await request('PUT', dataUser, `users/${id}`);


        dispatch(SnackbarActions.OpenSnackbar(
            {
                open: true,
                content: "You have successfully updated users",
                state: "correct",
            }));
        await request("POST", {
            "channel": "users-channel",
            "event": "users-updated",
            "data": {
                "data": {
                    id: dataUser._id,
                    cccdNumber: dataUser.cccdNumber,
                    fullName: dataUser.fullName,
                    email: dataUser.email,
                    role: dataUser.role,
                    isActive: dataUser.isActive
                }
            }
        }, "pusher")
        return;
    }

    const fetch = async () => {
        const data = await request('GET', "", `users/${id}`);
        setDataUser(data);
    }

    useEffect(() => {
        if (ids) {
            fetch();
        }
    }, [ids])

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: 'column',
                gap: '30px',
                minWidth: '35vw'
            }}
        >
            <StyleTitle>Details User</StyleTitle>
            <StyleLineDashed />
            {
                dataUser && <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    <StyleScrollY>
                        <StyleSubtitle>User Information</StyleSubtitle>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '200px',
                                    width: '200px',
                                    position: 'relative',
                                }}
                            >
                                <img src={dataUser.profileImage ? dataUser.profileImage : "/Images/admin/header/profile.svg"}
                                    style={{
                                        height: '100%',
                                    }}
                                />
                                <CameraEnhanceIcon 
                                    sx={{
                                        position: 'absolute',
                                        bottom: '10%',
                                        right: '10%',
                                        fontSize: '35px',
                                        opacity: '0.7',
                                        ":hover": {
                                            opacity: '0.9',
                                            cursor: 'pointer'
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                        <StyleBoxInput>
                            <StyleLabel>ID</StyleLabel>
                            <StyleInput type="text" value={dataUser._id} />
                        </StyleBoxInput>
                        <StyleBoxInput>
                            <StyleLabel>CCCD Number</StyleLabel>
                            <StyleInput type="text" placeholder="No CCCD information yet" value={dataUser.cccdNumber} onChange={(e: any) => {
                                setDataUser({
                                    ...dataUser,
                                    cccdNumber: e.target.value
                                })
                            }} />
                        </StyleBoxInput>
                        <StyleBoxInput>
                            <StyleLabel>Insurance Number</StyleLabel>
                            <StyleInput type="text" placeholder="No Insurance Number information yet" value={dataUser.insuranceNumber} onChange={(e: any) => {
                                setDataUser({
                                    ...dataUser,
                                    insuranceNumber: e.target.value
                                })
                            }} />
                        </StyleBoxInput>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '30px'
                            }}
                        >
                            <StyleBoxInput>
                                <StyleLabel>Full Name</StyleLabel>
                                <StyleInput type="text" placeholder="Function fullname...." value={dataUser.fullName}
                                    onChange={(e: any) => {
                                        setDataUser({
                                            ...dataUser,
                                            fullName: e.target.value
                                        })
                                    }}
                                />
                            </StyleBoxInput>
                            <StyleBoxInput>
                                <StyleLabel>Username</StyleLabel>
                                <StyleInput type="text" placeholder="Function username...." value={dataUser.username}
                                    onChange={(e: any) => {
                                        setDataUser({
                                            ...dataUser,
                                            username: e.target.value
                                        })
                                    }}
                                />
                            </StyleBoxInput>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '30px'
                            }}
                        >
                            <StyleBoxInput>
                                <StyleLabel>Email</StyleLabel>
                                <StyleInput type="text" placeholder="Function email...." value={dataUser.email}
                                    onChange={(e: any) => {
                                        setDataUser({
                                            ...dataUser,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </StyleBoxInput>
                            <StyleBoxInput>
                                <StyleLabel>Phone</StyleLabel>
                                <StyleInput type="text" placeholder="Function phone...." value={dataUser.phoneNumber}
                                    onChange={(e: any) => {
                                        setDataUser({
                                            ...dataUser,
                                            phoneNumber: e.target.value
                                        })
                                    }}
                                />
                            </StyleBoxInput>
                        </Box>
                        <StyleBoxInput>
                            <StyleLabel>Address</StyleLabel>
                            <StyleInput type="text" placeholder="No address information yet" value={dataUser.address} onChange={(e: any) => {
                                setDataUser({
                                    ...dataUser,
                                    address: e.target.value
                                })
                            }} />
                        </StyleBoxInput>
                        <StyleBoxInput>
                            <StyleLabel>Emergency Contact</StyleLabel>
                            <StyleInput type="text" placeholder="No Emergency Contact information yet" value={dataUser.emergencyContact} onChange={(e: any) => {
                                setDataUser({
                                    ...dataUser,
                                    emergencyContact: e.target.value
                                })
                            }} />
                        </StyleBoxInput>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '30px'
                            }}
                        >
                            <StyleBoxInput>
                                <StyleLabel>Roles</StyleLabel>
                                <StyleBoxInput>
                                    <StyleFormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={dataUser.role}
                                            onChange={(e: any) => {
                                                setDataUser({
                                                    ...dataUser,
                                                    role: e.target.value
                                                })
                                            }}
                                        >
                                            {
                                                roles.map((role, index) => (
                                                    <MenuItem key={index} value={role}>{role}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </StyleFormControl>
                                </StyleBoxInput>
                            </StyleBoxInput>
                            <StyleBoxInput>
                                <StyleLabel>Gender</StyleLabel>
                                <StyleBoxInput>
                                    <StyleFormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={dataUser.gender}
                                            onChange={(e: any) => {
                                                setDataUser({
                                                    ...dataUser,
                                                    gender: e.target.value
                                                })
                                            }}
                                        >
                                            {
                                                gender.map((item, index) => (
                                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </StyleFormControl>
                                </StyleBoxInput>
                            </StyleBoxInput>
                        </Box>
                        <StyleBoxInput
                            sx={{
                                ".MuiStack-root": {
                                    width: '100% !important',
                                    paddingTop: '0 !important'
                                }
                            }}
                        >
                            <StyleLabel>Date Of Birth</StyleLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    sx={{
                                        "fieldset": {
                                            border: '0'
                                        },
                                        ".MuiInputBase-root": {
                                            background: '#222338',
                                            color: '#626D7D',
                                        }
                                    }}
                                    components={[
                                        'MobileDatePicker',
                                    ]}
                                >
                                    <DemoItem>
                                        <MobileDatePicker
                                            value={dayjs(dataUser.dateOfBirth)}
                                            onChange={(newValue) => {
                                                setDataUser({
                                                    ...dataUser,
                                                    dateOfBirth: newValue
                                                });
                                            }}
                                        />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </StyleBoxInput>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '30px'
                            }}
                        >
                            <StyleBoxInput>
                                <StyleLabel>CreatedAt</StyleLabel>
                                <StyleInput type="text" value={dataUser.createdAt} />
                            </StyleBoxInput>
                            <StyleBoxInput>
                                <StyleLabel>UpdatedAt</StyleLabel>
                                <StyleInput type="text" value={dataUser.updatedAt} />
                            </StyleBoxInput>
                        </Box>
                        <StyleBoxInput>
                            <Button variant="contained" color={dataUser.isActive ? "success" : "error"}
                                sx={{
                                    height: '48px'
                                }}
                                onClick={() => {
                                    setDataUser({
                                        ...dataUser,
                                        isActive: !dataUser.isActive
                                    });
                                }}
                            >
                                {dataUser.isActive ? "active" : "inactive"}
                            </Button>
                        </StyleBoxInput>
                    </StyleScrollY>
                </Box>
            }

            <Box>
                <StyleButton variant="contained" color="success" onClick={handleUpdateUser}>
                    <span>Update new user</span>
                </StyleButton>
            </Box>
        </Box>
    );
}