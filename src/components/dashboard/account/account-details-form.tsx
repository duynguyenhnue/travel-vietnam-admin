'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Unstable_Grid2';

import { type User } from '@/types/user';
import { useUser } from '@/hooks/use-user';
import { Box, MenuItem, TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { toast } from 'react-toastify';

interface Location {
  id: string;
  name: string;
}
export function AccountDetailsForm(): React.JSX.Element {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<User | null>(user);
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }): void => {
    const { name, value } = event.target;
    setUserDetail((prev) => {
      if (!prev) return null;
      if (name.includes('phone.')) {
        return {
          ...prev,
          phone: {
            ...(prev.phone || {}),
            number: name === 'phone.number' ? value : prev.phone?.number,
            country: name === 'phone.country' ? value : prev.phone?.country,
          },
        };
      }
      else if (name.includes('address.')) {
        return {
          ...prev,
          address: {
            ...(prev.address || {}),
            province: name === 'address.province' ? value : prev.address?.province,
            district: name === 'address.district' ? value : prev.address?.district,
            ward: name === 'address.ward' ? value : prev.address?.ward,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
      });
  };

  useEffect(() => {
    const fetchProvinces = async (): Promise<void> => {
      try {
        const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
        const data: { data: Location[] } = await response.json() as { data: Location[] };
        setProvinces(data.data);
      } catch (error: unknown) {
        toast.error(`Error fetching provinces: ${String(error)}`); 
      }
    };

    fetchProvinces().catch((error: unknown) => {
      toast.error(`Error fetching provinces: ${String(error)}`); 
    });
  }, []);

  useEffect(() => {
    if (userDetail?.address?.province) {
      fetch(`https://esgoo.net/api-tinhthanh/2/${userDetail.address.province}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setDistricts(data.data);
        })
        .catch((error: unknown) => {
          toast.error(`Error fetching districts: ${String(error)}`); 
        });
    }
  }, [userDetail?.address?.province]);

  useEffect(() => {
    if (userDetail?.address?.district) {
      fetch(`https://esgoo.net/api-tinhthanh/3/${userDetail.address.district}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setWards(data.data);
        })
        .catch((error: unknown) => {
          toast.error(`Error fetching wards: ${String(error)}`); 
        });
    }
  }, [userDetail?.address?.district]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Full name</InputLabel>
                <OutlinedInput
                  defaultValue={userDetail?.fullName}
                  label="Full name"
                  name="fullName"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput
                  defaultValue={userDetail?.email}
                  label="Email address"
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="date-of-birth" shrink>Date Of Birth</InputLabel>
                <OutlinedInput
                  id="date-of-birth"
                  type="date"
                  name="dateOfBirth"
                  defaultValue={userDetail?.dateOfBirth ? userDetail.dateOfBirth.split('T')[0] : ''}
                  onChange={handleChange}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <Box sx={{ display: 'flex', height: '100%', gap: '10px', ".MuiInputAdornment-root": { marginTop: '0px !important' }, ".MuiInputBase-input": { paddingTop: '10px !important', paddingBottom: '10px !important' } }}>
                <MuiTelInput
                  sx={{ width: '170px', height: '100%', ".MuiInputBase-root": { height: '100%' } }}
                  value={userDetail?.phone?.country}
                  name="phone.country"
                  onChange={(value: string) => {
                    handleChange({ target: { name: 'phone.country', value } }); 
                  }}
                  defaultCountry="VN"
                />
                <FormControl
                  fullWidth
                >
                  <OutlinedInput
                    sx={{ flex: 1 }}
                    value={userDetail?.phone?.number}
                    name="phone.number"
                    placeholder="000 000 000"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid md={4} xs={12}>
              <TextField
                select
                label="Province"
                name="address.province"
                value={userDetail?.address?.province}
                onChange={handleChange}
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
            <Grid md={4} xs={12}>
              <TextField
                select
                label="District"
                name="address.district"
                value={userDetail?.address?.district}
                onChange={handleChange}
                fullWidth
                disabled={!userDetail?.address?.province}
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

            <Grid md={4} xs={12}>
              <TextField
                select
                label="Ward"
                name="address.ward"
                value={userDetail?.address?.ward}
                onChange={handleChange}
                fullWidth
                disabled={!userDetail?.address?.district}
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
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
}
