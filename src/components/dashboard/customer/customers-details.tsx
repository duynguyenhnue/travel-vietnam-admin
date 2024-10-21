'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Box, Button, Dialog, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { userApi } from '@/lib/user/user';
import { useSelector } from 'react-redux';
import { MuiTelInput } from 'mui-tel-input';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { RootState } from '@/redux/store';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { toast } from 'react-toastify';

interface Location {
    id: string;
    name: string;
}

interface Address {
    province: string;
    district: string;
    ward: string;
}

interface Phone {
    country: string;
    number: string;
}

interface RegisterValues {
    email: string;
    fullName: string;
    dateOfBirth: Dayjs | null;
    address: Address;
    phone: Phone;
    role: string;
    status: string;
    avatar: string;
}

const initialValues: RegisterValues = {
    email: '',
    fullName: '',
    dateOfBirth: null,
    address: {
        province: '',
        district: '',
        ward: '',
    },
    phone: {
        country: '+ 84',
        number: '',
    },
    role: 'User',
    status: "ACTIVE",
    avatar: "",
};

interface Location {
    id: string;
    name: string;
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Must be a valid email')
        .max(255, 'Email must be at most 255 characters')
        .required('Email is required'),

    fullName: Yup.string()
        .max(255, 'Full name must be at most 255 characters')
        .required('Full name is required'),

    status: Yup.string().required('Status is required'),

    dateOfBirth: Yup.date().required('Date of birth is required'),

    address: Yup.object({
        province: Yup.string().required('Province is required'),
        district: Yup.string().required('District is required'),
        ward: Yup.string().required('Ward is required'),
    }),

    phone: Yup.object({
        country: Yup.string().required('Country code is required'),
        number: Yup.string()
            .max(9, 'Number phone must be at most 9 characters')
            .matches(/^\d{8,11}$/, 'Phone number must be between 8 and 11 digits')
            .required('Phone number is required'),
    }),
});


export function CustomersDetails(): React.ReactElement {
    const [dialogOpen, setDialogOpen] = useState(false);
    const customers = useSelector((state: RootState) => state.dialog.customer);
    const [showCustomer, setShowCustomer] = useState<string | null>(null);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values): Promise<void> => {
            try {
                const registerData = {
                    email: values.email.toLowerCase(),
                    fullName: values.fullName,
                    dateOfBirth: values.dateOfBirth?.toISOString() || '',
                    address: {
                        province: values.address.province,
                        district: values.address.district,
                        ward: values.address.ward,
                    },
                    phone: {
                        country: values.phone.country,
                        number: values.phone.number,
                    },
                };
                void (await userApi.updateUser(registerData, showCustomer || ''));
            } catch (err) {
                toast.error(`Error updating user: ${String(err)}`);
            }
        },
    });

    const handleDetailsClick = (): void => {
        setShowCustomer(customers.showDetails[0]);
        setDialogOpen(true);
    };

    const handleCloseDialog = (): void => {
        setShowCustomer(null);
        setDialogOpen(false);
    };
    const [provinces, setProvinces] = useState<Location[]>([]);
    const [districts, setDistricts] = useState<Location[]>([]);
    const [wards, setWards] = useState<Location[]>([]);
    const status = ['ACTIVE', 'INACTIVATED', "REMOVED", "NOT ACTIVATED"];

    useEffect(() => {
        const fetchProvinces = async (): Promise<void> => {
            try {
                const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
                const data: { data: Location[] } =  await response.json() as { data: Location[] };
                setProvinces(data.data);
            } catch (error: unknown) { 
                toast.error(`Error fetching provinces: ${String(error)}`);
            }
        };
        void fetchProvinces(); 
    }, []);
    
    useEffect(() => {
        const fetchDistricts = async (): Promise<void> => {
            if (formik.values.address.province) {
                try {
                    const response = await fetch(`https://esgoo.net/api-tinhthanh/2/${formik.values.address.province}.htm`);
                    const data: { data: Location[] } = await response.json() as { data: Location[] };
                    setDistricts(data.data);
                } catch (error: unknown) { // Explicitly type error as unknown
                    toast.error(`Error fetching districts: ${String(error)}`);
                }
            }
        };
        void fetchDistricts(); // Use void to ignore promise warning
    }, [formik.values.address.province]);
    
    useEffect(() => {
        const fetchWards = async (): Promise<void> => {
            if (formik.values.address.district) {
                try {
                    const response = await fetch(`https://esgoo.net/api-tinhthanh/3/${formik.values.address.district}.htm`);
                    const data: { data: Location[] } = await response.json() as { data: Location[] };
                    setWards(data.data);
                } catch (error: unknown) { // Explicitly type error as unknown
                    toast.error(`Error fetching wards: ${String(error)}`);
                }
            }
        };
        void fetchWards();
    }, [formik.values.address.district]);
    
    useEffect(() => {
        const fetchUser = async (): Promise<void> => {
            if (showCustomer) {
                try {
                    const { data } = await userApi.getUserById(showCustomer); 
                    if (data) {
                        void formik.setValues({
                            ...formik.values,
                            fullName: data.fullName,
                            email: data.email,
                            dateOfBirth: dayjs(data.dateOfBirth),
                            status: data.status,
                            address: {
                                province: data.address?.province || '',
                                district: data.address?.district || '',
                                ward: data.address?.ward || '',
                            },
                            phone: {
                                country: data.phone?.country || '+84',
                                number: data.phone?.number || '',
                            },
                        });
                    }
                } catch (error: unknown) { 
                    toast.error(`Error fetching user: ${String(error)}`);
                }
            }
        };
    
        const timer = setTimeout(() => {
            if (showCustomer) {
                fetchUser().catch((error: unknown) => {
                    toast.error(`Error in fetchUser: ${String(error)}`);
                });
            }
        }, 1000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [showCustomer, formik]); // Added formik to the dependency array

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleIconClick = (): void => {
        fileInputRef?.current?.click();
    };

    const handleFileChange = async (): Promise<void> => {  
        // const file = fileList[0]; 
        // setImgProfile(file);
    };

    const handleNext = (): void => {
        // if (numberTab === ids.length) {
        //     setNumberTab(1);
        // } else {
        //     setNumberTab((pre) => pre + 1);
        // }
    }

    const handlePervious = (): void => {
        // if (numberTab === 1) {
        //     setNumberTab(ids.length);
        // } else {
        //     setNumberTab((pre) => pre - 1);
        // }
    }

    return (
        <>
            <Button startIcon={<PreviewIcon />} variant="outlined" onClick={handleDetailsClick}>
                Details
            </Button>
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <Stack spacing={4} padding={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">User Details</Typography>
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <SkipPreviousIcon
                                onClick={handlePervious}
                            />
                            {/* <p>{numberTab}</p> */}
                            <SkipNextIcon
                                onClick={handleNext}
                            />
                        </Box>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} mb={4}>
                            <Box
                                sx={{
                                    height: '200px',
                                    width: '200px',
                                    position: 'relative',
                                }}
                            >
                                <Avatar alt="Remy Sharp" src={formik.values.avatar} sx={{ width: '100%', height: '100%', borderRadius: '50%', boxShadow: formik.values.avatar ? "#7b7b7b91 0 0 5px 5px" : '', objectFit: 'cover' }} />
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
                                    onClick={handleIconClick}
                                />
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                error={Boolean(formik.touched.fullName && formik.errors.fullName)} // Updated to use Boolean
                                fullWidth
                                helperText={formik.touched.fullName ? formik.errors.fullName : undefined}
                                label="Full Name"
                                name="fullName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                error={Boolean(formik.touched.email && formik.errors.email)} // Updated to use Boolean
                                fullWidth
                                helperText={formik.touched.email ? formik.errors.email : undefined}
                                label="Email address"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                value={formik.values.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{ width: '100%' }}
                                    label="Date of Birth"
                                    value={formik.values.dateOfBirth}
                                    onChange={(date: Dayjs | null) => formik.setFieldValue('dateOfBirth', date)}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                select
                                label="Province"
                                name="address.province"
                                value={formik.values.address?.province}
                                onChange={(value) => formik.setFieldValue('address.province', value.target.value)}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.address?.province) && Boolean(formik.errors.address?.province)} // Updated to use Boolean
                                helperText={formik.touched.address?.province ? formik.errors.address?.province : undefined}
                                fullWidth
                            >
                                {provinces.map((province) => (
                                    <MenuItem
                                        key={province.id}
                                        value={province.id}
                                    >
                                        {province.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                select
                                label="District"
                                name="address.district"
                                value={formik.values.address?.district}
                                onChange={(value) => formik.setFieldValue('address.district', value.target.value)}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.address?.district) && Boolean(formik.errors.address?.district)} // Updated to use Boolean
                                helperText={formik.touched.address?.district ? formik.errors.address?.district : undefined}
                                fullWidth
                                disabled={!formik.values.address?.province}
                            >
                                {districts.map((district) => (
                                    <MenuItem
                                        key={district.id}
                                        value={district.id}
                                    >
                                        {district.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                select
                                label="Ward"
                                name="address.ward"
                                value={formik.values.address?.ward}
                                onChange={(value) => formik.setFieldValue('address.ward', value.target.value)}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.address?.ward) && Boolean(formik.errors.address?.ward)} // Updated to use Boolean
                                helperText={formik.touched.address?.ward ? formik.errors.address?.ward : undefined}
                                fullWidth
                                disabled={!formik.values.address?.district}
                            >
                                {wards.map((ward) => (
                                    <MenuItem
                                        key={ward.id}
                                        value={ward.id}
                                    >
                                        {ward.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <MuiTelInput
                                sx={{ width: '170px' }}
                                value={formik.values.phone.country}
                                name="phone.country"
                                onChange={(value) => formik.setFieldValue('phone.country', value)}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.phone?.country) && Boolean(formik.errors.phone?.country)} // Updated to use Boolean
                                helperText={formik.touched.phone?.country ? formik.errors.phone?.country : undefined}
                                defaultCountry="VN"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                error={Boolean(formik.touched.phone?.number && formik.errors.phone?.number)} // Updated to use Boolean
                                fullWidth
                                helperText={formik.touched.phone?.number ? formik.errors.phone?.number : undefined}
                                label="Phone Number"
                                name="phone.number"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*$/.test(value)) {
                                        void formik.setFieldValue('phone.number', value); 
                                    }
                                }}
                                value={formik.values.phone.number}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        select
                        label="Status"
                        name="status"
                        value={formik.values.status}
                        onChange={(value) => formik.setFieldValue('status', value.target.value)}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.status) && Boolean(formik.errors.status)} 
                        helperText={formik.touched.status ? formik.errors.status : undefined}
                        fullWidth
                    >
                        {status.map((item: string) => (
                            <MenuItem
                                key={item}
                                value={item}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                        Update User
                    </Button>
                </Stack>
            </Dialog>
        </>
    );
}
