'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Box, Button, Dialog, FormControl, FormHelperText, Grid, MenuItem, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { userApi } from '@/lib/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { DialogActions } from '@/redux/dialog';
import { MuiTelInput } from 'mui-tel-input';
import dayjs, { Dayjs } from 'dayjs';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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
    const customers = useSelector((state: any) => state.dialog.customer);
    const [showCustomer, setShowCustomer] = useState<string | null>(null);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers): Promise<void> => {
            try {
                const registerData = {
                    email: values.email.toLowerCase(),
                    fullName: values.fullName,
                    dateOfBirth: values.dateOfBirth,
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
                console.log(registerData);
                // void (await userApi.createUser(registerData));
            } catch (err) {
                // if (isMounted()) {
                //     helpers.setStatus({ success: false });
                //     helpers.setSubmitting(false);
                // }
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
    const [status, setStatus] = useState<string[]>(['ACTIVE', 'INACTIVATED', "REMOVED", "NOT ACTIVATED"]);

    useEffect(() => {
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((response) => response.json())
            .then((data) => setProvinces(data.data));
    }, []);

    useEffect(() => {
        if (formik.values.address.province) {
            fetch(`https://esgoo.net/api-tinhthanh/2/${formik.values.address.province}.htm`)
                .then((response) => response.json())
                .then((data) => setDistricts(data.data));
        }
    }, [formik.values.address.province]);

    useEffect(() => {
        if (formik.values.address.district) {
            fetch(`https://esgoo.net/api-tinhthanh/3/${formik.values.address.district}.htm`)
                .then((response) => response.json())
                .then((data) => setWards(data.data));
        }
    }, [formik.values.address.district]);

    useEffect(() => {
        const fetchUser = async (): Promise<void> => {
            const data = await userApi.getUserById(showCustomer || '');
            console.log(data);
            formik.setValues({
                ...formik.values,
                fullName: data.fullName,
                email: data.email,
                dateOfBirth: dayjs(data.dateOfBirth),
                status: data.status,
                address: {
                    province: data.address ? data.address.province : '',
                    district: data.address ? data.address.district : '',
                    ward: data.address ? data.address.ward : '',
                },
                phone: {
                    country: data.phone ? data.phone.country : '',
                    number: data.phone ? data.phone.number : '',
                },
                // policy: data.policy,
                // role: data.role,
                // status: data.status,
            });
        };
        const timer = setTimeout(() => {
            if (showCustomer) {
                void fetchUser();
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [showCustomer]);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleIconClick = () => {
        fileInputRef?.current?.click();
    };

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        if (!file) return;
        // setImgProfile(file);
    };

    const handleNext = () => {
        // if (numberTab === ids.length) {
        //     setNumberTab(1);
        // } else {
        //     setNumberTab((pre) => pre + 1);
        // }
    }

    const handlePervious = () => {
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
                                error={!!(formik.touched.fullName && formik.errors.fullName)}
                                fullWidth
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                label="Full Name"
                                name="fullName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                error={!!(formik.touched.email && formik.errors.email)}
                                fullWidth
                                helperText={formik.touched.email && formik.errors.email}
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
                                error={formik.touched.address?.province && !!formik.errors.address?.province}
                                helperText={formik.touched.address?.province && formik.errors.address?.province}
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
                                error={formik.touched.address?.district && !!formik.errors.address?.district}
                                helperText={formik.touched.address?.district && formik.errors.address?.district}
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
                                error={formik.touched.address?.ward && !!formik.errors.address?.ward}
                                helperText={formik.touched.address?.ward && formik.errors.address?.ward}
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
                                error={formik.touched.phone?.country && !!formik.errors.phone?.country}
                                helperText={formik.touched.phone?.country && formik.errors.phone?.country}
                                defaultCountry="VN"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                error={!!(formik.touched.phone?.number && formik.errors.phone?.number)}
                                fullWidth
                                helperText={formik.touched.phone?.number && formik.errors.phone?.number}
                                label="Phone Number"
                                name="phone.number"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*$/.test(value)) {
                                        formik.setFieldValue('phone.number', value);
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
                        error={formik.touched.status && !!formik.errors.status}
                        helperText={formik.touched.status && formik.errors.status}
                        fullWidth
                    >
                        {status.map((status) => (
                            <MenuItem
                                key={status}
                                value={status}
                            >
                                {status}
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
