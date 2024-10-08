'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, Grid, Stack, TextField, Typography } from '@mui/material';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

import { type Address } from '@/types';
import { type Phone } from '@/types/user';
import { userApi, type SignUpParams } from '@/lib/user/user';

class CreateUserRequest {
  email: string | undefined;
  fullName: string | undefined;
  password: string | undefined;
  confirmPass: string | undefined;
  dateOfBirth: string | undefined;
  address: Address | undefined;
  phone: Phone | undefined;
}

interface Location {
  id: string;
  name: string;
}

export function RegisterForm(): React.ReactElement {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddClick = (): void => {
    setDialogOpen(true);
  };

  const handleCloseDialog = (): void => {
    setDialogOpen(false);
  };
  const [formData, setFormData] = useState<CreateUserRequest>(new CreateUserRequest());
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);

  useEffect(() => {
    void fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
      .then((response) => response.json())
      .then((data: { data: Location[] }) => {
        setProvinces(data?.data);
      });
  }, []);

  useEffect(() => {
    if (formData?.address?.province) {
      void fetch(`https://esgoo.net/api-tinhthanh/2/${formData.address.province}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setDistricts(data?.data);
        });
    } else {
      setDistricts([]);
    }
  }, [formData?.address?.province]);

  useEffect(() => {
    if (formData?.address?.district) {
      void fetch(`https://esgoo.net/api-tinhthanh/3/${formData.address.district}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setWards(data?.data);
        });
    } else {
      setWards([]);
    }
  }, [formData?.address?.district]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedWard = e.target.value;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        ward: selectedWard,
        province: prev.address?.province || '',
        district: prev.address?.district || '',
      },
    }));
  };
  const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedProvince = e.target.value;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        province: selectedProvince,
        district: prev.address?.district || '',
        ward: prev.address?.ward || '',
      },
    }));
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedDistrict = e.target.value;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        district: selectedDistrict,
        province: prev.address?.province || '',
        ward: prev.address?.ward || '',
      },
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      phone: { ...prev.phone, [name]: value } as Phone,
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    const data: SignUpParams = {
      email: formData.email || '',
      fullName: formData.fullName || '',
      password: formData.password || '',
      dateOfBirth: formData.dateOfBirth || '',
      address: {
        province: formData.address?.province || '',
        district: formData.address?.district || '',
        ward: formData.address?.ward || '',
      },
      phone: {
        country: formData.phone?.country || '',
        number: formData.phone?.number || '',
      },
    };
    void (await userApi.createUser(data));
  };

  return (
    <>
      <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleAddClick}>
        Add
      </Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <Stack p={3}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">User Registration</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Email" name="email" variant="outlined" onChange={handleChange} required fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ minLength: 8, maxLength: 32 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ minLength: 8, maxLength: 32 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Address</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  name="province"
                  variant="outlined"
                  onChange={handleProvinceChange}
                  required
                  value={formData?.address?.province || ''}
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  name="district"
                  variant="outlined"
                  onChange={handleDistrictChange}
                  required
                  fullWidth
                  defaultValue={formData?.address?.district || ''}
                  disabled={!formData?.address?.province}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {districts.map((district) => (
                    <option key={district?.id} value={district?.id}>
                      {district.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  name="ward"
                  variant="outlined"
                  onChange={handleAddressChange}
                  required
                  fullWidth
                  defaultValue={formData?.address?.ward || ''}
                  disabled={!formData?.address?.district}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" disabled>
                    Select Ward
                  </option>
                  {wards.map((ward) => (
                    <option key={ward.id} value={ward.id}>
                      {ward.name}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Phone</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Country Code"
                  name="country"
                  variant="outlined"
                  onChange={handlePhoneChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  name="number"
                  variant="outlined"
                  onChange={handlePhoneChange}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
              Register
            </Button>
          </Box>
        </Stack>
      </Dialog>
    </>
  );
}
