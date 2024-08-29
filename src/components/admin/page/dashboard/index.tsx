import { Box } from "@mui/material";
import Welcome from "../../dashboard/welcome";
import PatientStatistics from "../../dashboard/statistics";
import Appointments from "../../dashboard/appointments";
import RecentUsers from "../../dashboard/recentusers";

export default function DashBoard() {
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
            <Welcome />
            <PatientStatistics />
            <Appointments />
            <RecentUsers />
        </Box>
    );
}