import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyleBox, StyleHeadTable, StylePTitle, StyleTable, StyleTitleTable, StyleViewAllTable } from "../style-mui";
import { useState } from "react";

interface createData {
    name: string,
    id: string,
    role: string,
    gender: string,
    email: string,
}

export default function RecentUsers() {
    const [users, setUsers] = useState<createData[] | null>([
        {
            name: "Nguyen Van A",
            id: "001",
            role: "Admin",
            gender: "Male",
            email: "nguyenvana@example.com"
        },
        {
            name: "Tran Thi B",
            id: "002",
            role: "Doctor",
            gender: "Female",
            email: "tranthib@example.com"
        },
        {
            name: "Le Van C",
            id: "003",
            role: "Nurse",
            gender: "Male",
            email: "levanc@example.com"
        },
        {
            name: "Pham Thi D",
            id: "004",
            role: "Receptionist",
            gender: "Female",
            email: "phamthid@example.com"
        },
        {
            name: "Hoang Van E",
            id: "005",
            role: "Patient",
            gender: "Male",
            email: "hoangvane@example.com"
        }
    ]);
    return (
        <StyleBox>
            <StyleTable>
                <StyleHeadTable>
                    <StylePTitle>Recent Users</StylePTitle>
                    <StyleViewAllTable href="./admin/users">view all users</StyleViewAllTable>
                </StyleHeadTable>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table"
                        sx={{
                            minWidth: 650,
                            ".MuiTableCell-sizeMedium": {
                                fontSize: "16px",
                                color: '#6E86C2',
                                background: '#222338'
                            },
                        }}
                    >
                        <TableHead
                            sx={{
                                ".MuiTableCell-head": {
                                    color: "#F4F0FF !important",
                                    fontSize: "18px !important",
                                    border: '0 !important',
                                    fontWeight: 'bold'
                                },
                                ".MuiTableRow-head": {
                                    background: '#222338'
                                }
                            }}
                        >
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{
                                ".MuiTableCell-root": {
                                    border: '0 !important',
                                }
                            }}
                        >
                            {
                                users && Array.isArray(users) && users.length > 0 ? users.map((row: any, index: number) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            'th, td': {
                                                color: index % 2 == 0 ? '#F4F0FF !important' : '#6E86C2 !important' 
                                            }
                                        }}
                                    >
                                        <TableCell component="th" scope="row" >{row.id}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.role}</TableCell>
                                        <TableCell align="left">{row.gender}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                    </TableRow>
                                )) :
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                {
                                                    border: 0
                                                },
                                            }}
                                        >
                                            <TableCell component="th" scope="row"><Skeleton width={140} height={25} /></TableCell>
                                            <TableCell align="left"><Skeleton width={140} height={25} /></TableCell>
                                            <TableCell align="left"><Skeleton width={140} height={25} /></TableCell>
                                            <TableCell align="left"><Skeleton width={140} height={25} /></TableCell>
                                            <TableCell align="left"><Skeleton width={140} height={25} /></TableCell>
                                        </TableRow>
                                    ))
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </StyleTable>
        </StyleBox>
    );
}