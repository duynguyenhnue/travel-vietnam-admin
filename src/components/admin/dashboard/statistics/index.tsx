import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StyleBox, StyleBoxRowSBW, StyleFormController, StylePTitle } from "../style-mui";
import { useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';

export default function PatientStatistics() {
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2100, 2109, 3004, 1230, 4000];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2390, 3490, 2100, 2109, 0];
    const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100, 2390, 3490, 2100, 2109, 0];

    const xLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    return (
        <StyleBox>
            <StyleBoxRowSBW>
                <StylePTitle>System patient statistics</StylePTitle>
                <StyleFormController>
                    <InputLabel id="demo-simple-select-label">Months</InputLabel>
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
            <BarChart
                sx={{
                    ".MuiChartsAxis-tickLabel, tspan": {
                        fill: '#8F8F8F !important'
                    },
                    ".MuiChartsAxis-tick, .MuiChartsAxis-line": {
                        stroke: 'none !important'
                    }, 
                }}
                height={600}
                borderRadius={10}
                colors={['rgba(86, 204, 242, 1)','rgba(255, 166, 0, 0.8)','rgba(255, 86, 48, 0.8)']}
                series={[
                    { data: pData, label: 'pv', stack: 'stack1' },
                    { data: amtData, label: 'amt', stack: 'stack1'},
                    { data: uData, label: 'uv', stack: 'stack1' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
        </StyleBox>
    );
}