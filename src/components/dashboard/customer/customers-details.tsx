'use client';

import React, { useEffect, useRef, useState } from 'react';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import PreviewIcon from '@mui/icons-material/Preview';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Avatar, Box, Button, Dialog, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { type Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { type User } from '@/types/user';
import { userApi, type SignUpParams } from '@/lib/user/user';

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
  status: 'ACTIVE',
  avatar: '',
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

  fullName: Yup.string().max(255, 'Full name must be at most 255 characters').required('Full name is required'),

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
        // const registerData: SignUpParams = {
        //   email: values.email.toLowerCase(),
        //   fullName: values.fullName,
        //   dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : '',
        //   address: {
        //     province: values.address.province,
        //     district: values.address.district,
        //     ward: values.address.ward,
        //   },
        //   phone: {
        //     country: values.phone.country,
        //     number: values.phone.number,
        //   },
        // };
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
    setShowCustomer(customers.showDetails[0] || null);
    setDialogOpen(true);
  };

  const handleCloseDialog = (): void => {
    setShowCustomer(null);
    setDialogOpen(false);
  };
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);
  const status = ['ACTIVE', 'INACTIVATED', 'REMOVED', 'NOT ACTIVATED'];

  useEffect(() => {
    void fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
      .then((response) => response.json())
      .then((data: { data?: Location[] }) => {
        setProvinces(data?.data || []);
      });
  }, []);

  useEffect(() => {
    if (formik.values.address.province) {
      void fetch(`https://esgoo.net/api-tinhthanh/2/${formik.values.address.province}.htm`)
        .then((response) => response.json())
        .then((data: { data?: Location[] }) => {
          setDistricts(data?.data || []);
        });
    }
  }, [formik.values.address.province]);

  useEffect(() => {
    if (formik.values.address.district) {
      void fetch(`https://esgoo.net/api-tinhthanh/3/${userDetail.address.district}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] } | undefined | null) => {
          setWards(data?.data || []);
        });
    }
  }, [formik.values.address.district]);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const data: User | undefined = (await userApi.getUserById(showCustomer || '')).data;
      if (data) {
        void formik.setValues({
          ...formik.values,
          fullName: data?.fullName ? data.fullName : '',
          email: data.email ? data.email : '',
          dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth) : null,
          status: data?.status ? data.status : ('' as string),
          address: {
            province: data.address ? data.address.province : '',
            district: data.address ? data.address.district : '',
            ward: data.address ? data.address.ward : '',
          },
          phone: {
            country: data.phone?.country ?? '',
            number: data.phone?.number ?? '',
          },
          // policy: data.policy,
          // role: data.role,
          // status: data.status,
        });
      }
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

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target?.files?.[0];
    if (!file) {
      return;
    }
    // setImgProfile(file);
  };

  const handlePervious = () => {
    // if (numberTab === 1) {
    //     setNumberTab(ids.length);
    // } else {
    //     setNumberTab((pre) => pre - 1);
    // }
  };

  const handleNext = () => {
    // if (numberTab === ids.length) {
    //     setNumberTab(1);
    // } else {
    //     setNumberTab((pre) => pre + 1);
    // }
  };

  const handleIconClick = () => {
    fileInputRef?.current?.click();
  };

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
              <SkipPreviousIcon onClick={handlePervious} />
              {/* <p>{numberTab}</p> */}
              <SkipNextIcon onClick={handleNext} />
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
                <Avatar
                  alt="Remy Sharp"
                  src={formik.values.avatar}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    boxShadow: formik.values.avatar ? '#7b7b7b91 0 0 5px 5px' : '',
                    objectFit: 'cover',
                  }}
                />
                <CameraEnhanceIcon
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    fontSize: '35px',
                    opacity: '0.7',
                    ':hover': {
                      opacity: '0.9',
                      cursor: 'pointer',
                    },
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
                error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                fullWidth
                helperText={formik.touched.fullName ? formik.errors.fullName : null}
                label="Full Name"
                name="fullName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email ? formik.errors.email : null}
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
                <DatePicker
                  sx={{ width: '100%' }}
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
                error={formik.touched.address?.province ? Boolean(formik.errors.address?.province) : undefined}
                helperText={formik.touched.address?.province ? formik.errors.address?.province : undefined}
                fullWidth
              >
                {provinces.map((province) => (
                  <MenuItem key={province.id} value={province.id}>
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
                error={formik.touched.address?.district ? Boolean(formik.errors.address?.district) : undefined}
                helperText={formik.touched.address?.district ? formik.errors.address?.district : undefined}
                fullWidth
                disabled={!formik.values.address?.province}
              >
                {districts.map((district) => (
                  <MenuItem key={district.id} value={district.id}>
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
                error={formik.touched.address?.ward ? Boolean(formik.errors.address?.ward) : undefined}
                helperText={formik.touched.address?.ward ? formik.errors.address?.ward : null}
                fullWidth
                disabled={!formik.values.address?.district}
              >
                {wards.map((ward) => (
                  <MenuItem key={ward.id} value={ward.id}>
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
                error={formik.touched.phone?.country ? Boolean(formik.errors.phone?.country) : undefined}
                helperText={formik.touched.phone?.country ? formik.errors.phone?.country : null}
                defaultCountry="VN"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                error={Boolean(formik.touched.phone?.number && formik.errors.phone?.number)}
                fullWidth
                helperText={formik.touched.phone?.number ? formik.errors.phone?.number : null}
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
            error={formik.touched.status ? Boolean(formik.errors.status) : undefined}
            helperText={formik.touched.status ? formik.errors.status : null}
            fullWidth
          >
            {status.map((s: string) => (
              <MenuItem key={s} value={s}>
                {s}
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
