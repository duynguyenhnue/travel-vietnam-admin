import { Box } from "@mui/material";
import Welcome from "../../dashboard/welcome";
import PatientStatistics from "../../dashboard/statistics";

export default function DashBoard() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                gap: '30px',
                flexDirection: 'column'
            }}
        >
            <Welcome />
            <PatientStatistics />
        </Box>
    );
}