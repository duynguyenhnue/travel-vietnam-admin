'use client';

import React from 'react';
import { Card, Grid, InputAdornment, TextField } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react';

interface CustomersFiltersProps {
  search: {
    title: string;
    groupSize: string;
    price: string;
    status: string;
    [key: string]: string;
  };
  handleChange: (
    field: 'title' | 'groupSize' | 'price' | 'status'
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TourFilters(props: CustomersFiltersProps): React.JSX.Element {
  const { search, handleChange } = props;
  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {['title', 'groupSize', 'price', 'status'].map((field) => (
          <Grid item xs={12} sm={4} key={field}>
            <TextField
              value={search[field]}
              onChange={handleChange(field as 'title' | 'groupSize' | 'price' | 'status')}
              fullWidth
              placeholder={`Search ${field}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
