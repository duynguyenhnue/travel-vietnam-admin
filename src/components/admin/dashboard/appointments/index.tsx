import { Box, Button, IconButton, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import { StyleBox, StyleBoxRowSBW, StyleFormController } from "../style-mui";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna'
];

const ITEM_HEIGHT = 48;

export default function Appointments() {
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    const appointments = [
        {
            "idAppointments": "64e5f13fa8c9b24a1c25e001",
            "patientName": "Nguyen Van A",
            "doctorName": "Dr. Le Thi B",
            "appointmentDate": "2024-08-25T09:00:00Z",
            "reason": "Khám sức khỏe định kỳ",
            "status": "Scheduled"
        },
        {
            "idAppointments": "64e5f13fa8c9b24a1c25e002",
            "patientName": "Tran Thi C",
            "doctorName": "Dr. Nguyen Van D",
            "appointmentDate": "2024-08-26T10:30:00Z",
            "reason": "Kiểm tra huyết áp",
            "status": "Completed"
        },
        {
            "idAppointments": "64e5f13fa8c9b24a1c25e003",
            "patientName": "Pham Van E",
            "doctorName": "Dr. Hoang Thi F",
            "appointmentDate": "2024-08-27T15:00:00Z",
            "reason": "Tư vấn dinh dưỡng",
            "status": "Cancelled"
        }
    ]

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function formatDateTime(dateString: string) {
        // Parse the date string into a Date object
        const date = new Date(dateString);
    
        // Get day of the week (abbreviated to 3 letters)
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    
        // Get the day of the month
        const dayOfMonth = date.getUTCDate(); 
    
        // Get hour in 12-hour format
        let hour = date.getUTCHours();
        let minute = date.getUTCMinutes().toString().padStart(2, '0'); // Convert minute to 2 digits
    
        // Determine AM or PM
        const period = hour >= 12 ? 'PM' : 'AM';
    
        // Convert to 12-hour format
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
    
        // Return the formatted object
        return {
            dayOfWeek: dayOfWeek,
            day: dayOfMonth,
            hour: hour,
            minute: minute,
            period: period
        };
    }
    return (
        <StyleBox>
            <StyleBoxRowSBW>
                <p
                    style={{
                        
                    }}
                >Appointments</p>
                <StyleFormController
                    sx={{
                        width: '150px'
                    }}
                >
                    <InputLabel id="demo-simple-select-label">Create New</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </StyleFormController>
            </StyleBoxRowSBW>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                }}
            >
                {
                    appointments.map((item: any, index: number) => (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '40px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#1B1C31',
                                        borderRadius: '10px',
                                        padding: '15px',
                                        width: '70px'
                                    }}
                                >
                                    <p
                                        style={{
                                            color: '#FFA600',
                                            fontWeight: '500',
                                            fontSize: '23px'
                                        }}
                                    >{formatDateTime(item.appointmentDate).dayOfWeek}</p>
                                    <p
                                        style={{
                                            color: '#EFEFEF',
                                            fontWeight: 'bold',
                                            fontSize: '18px'
                                        }}
                                    >{formatDateTime(item.appointmentDate).day}</p>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <p
                                        style={{
                                            color: '#FFFFFF',
                                            fontWeight: '500',
                                            fontSize: '25px'
                                        }}
                                    >{item.doctorName}</p>
                                    <p
                                        style={{
                                            color: '#8F8F8F',
                                            fontSize: '18px'
                                        }}
                                    >{formatDateTime(item.appointmentDate).hour} : {formatDateTime(item.appointmentDate).minute} {formatDateTime(item.appointmentDate).period}</p>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '30px'
                                }}
                            >
                                <Button variant="outlined" color={item.status === "Cancelled" ? "error" : (item.status === "Completed" ? "success" : "warning" )}>
                                    {item.status}
                                </Button>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    sx={{
                                        "svg": {
                                            color: '#8F8F8F',
                                        },
                                        background: '#1B1C31',
                                        borderRadius: '10px',
                                        height: 'min-content'
                                    }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                    }}
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </StyleBox>
    );
}