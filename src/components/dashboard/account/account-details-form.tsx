'use client';

import * as React from 'react';
import { useState } from 'react';
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

export function AccountDetailsForm(): React.JSX.Element {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<User | null>(user);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setUserDetail((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [name]: value,
        phone: {
          ...(prev.phone || {}),
          number: name === 'phoneNumber' ? value : prev.phone?.number,
        },
      };
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Here you can add logic to save the updated user details
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
                  onChange={handleChange} // Attach the onChange handler
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
                  onChange={handleChange} // Attach the onChange handler
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Phone number</InputLabel>
                <OutlinedInput
                  defaultValue={userDetail?.phone.number}
                  label="Phone number"
                  name="phoneNumber" // Ensure this matches your user detail structure
                  type="tel"
                  onChange={handleChange} // Attach the onChange handler
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="date-of-birth">Date Of Birth</InputLabel>
                <OutlinedInput
                  id="date-of-birth"
                  type="date"
                  name="dateOfBirth"
                  defaultValue={userDetail?.dateOfBirth ? userDetail.dateOfBirth.split('T')[0] : ''}
                  onChange={handleChange} // Attach the onChange handler
                  fullWidth
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <OutlinedInput
                  label="City"
                  name="city" // Ensure this matches your user detail structure
                  onChange={handleChange} // Attach the onChange handler
                />
              </FormControl>
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
