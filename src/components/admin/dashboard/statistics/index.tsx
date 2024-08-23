import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StyleBox } from "../style-mui";
import { useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';

export default function PatientStatistics() {
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2100, 2109, 3004, 1230, 4000];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2390, 3490, 2100, 2109];
    const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100, 2390, 3490, 2100, 2109];

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
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <p
                    style={{
                        color: '#EDEDED',
                        fontWeight: 'bold',
                        fontSize: '23px',
                    }}
                >Statistics of the village's patients</p>
                <FormControl
                    sx={{
                        width: '120px',
                        "fieldset": {
                            border: '1px solid #15BFFD',
                            borderRadius: '15px'
                        },
                        "label, svg": {
                            color: 'white'
                        }
                    }}
                >
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
                </FormControl>
            </Box>
            <BarChart
                sx={{
                    ".MuiChartsAxis-tickLabel": {
                        fill: '#8F8F8F !important'
                    },
                    ".MuiChartsAxis-tick, .MuiChartsAxis-line": {
                        stroke: 'none !important'
                    }
                }}
                height={600}
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