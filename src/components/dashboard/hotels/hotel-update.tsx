'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';

import { type Hotel } from '@/types/hotel';
import { type CreateHotelForm } from '@/types/hotel';
import { hotelApi } from '@/lib/hotel/hotel';
import { validationHotel } from '@/lib/yub/index';

import { AddressForm } from './common/address-form';
import { HotelSliderDialog } from './common/hotel-slider-dialog';
import { ImageUpload } from './common/image-upload';

interface HotelUpdateProps {
  open: boolean;
  onClose: () => void;
  hotelId: string;
}

export function UpdateHotel(props: HotelUpdateProps): React.ReactElement {
  const { open, onClose, hotelId } = props;
  const [openHotel, setOpenHotel] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);

  const formik = useFormik<CreateHotelForm>({
    initialValues: {
      files: [],
      name: '',
      description: '',
      price: 0,
      amenities: [],
      address: { province: '', district: '', ward: '' },
      maxGroupSize: 1,
      startDate: '',
      endDate: '',
    },
    validationSchema: validationHotel,
    onSubmit: async (values) => {
      await hotelApi.updateHotel(values, hotelId);
      formik.resetForm();
      onClose();
    },
  });

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await hotelApi.getHotel(hotelId);
      if (response.data) {
        void formik.setValues({
          files: response.data.photos,
          name: response.data.name ?? '',
          description: response.data.description ?? '',
          price: response.data.price ?? 0,
          amenities: response.data.amenities ?? [],
          address: response.data.address ?? { province: '', district: '', ward: '' },
          maxGroupSize: response.data.maxGroupSize ?? 0,
          startDate: response.data.startDate ?? '',
          endDate: response.data.endDate ?? '',
        });
      }
    }
    if (open) {
      void fetchData();
    }
  }, [open]);

  const handleClose = (): void => {
    setOpenHotel(false);
    setVisible(true);
  };

  return (
    <>
      <Dialog
        sx={{
          '& .MuiDialog-container.MuiDialog-scrollPaper.mui-hz1bth-MuiDialog-container > div': {
            maxWidth: 800,
            visibility: visible ? 'visible' : 'hidden',
          },
        }}
        open={open}
        onClose={onClose}
        fullWidth
      >
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <DialogTitle>
            <Typography variant="h3" textAlign="center" sx={{ fontWeight: 'bold' }}>
              Update Tour
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ marginY: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ImageUpload
                    images={formik.values.files as string[]}
                    setImages={(newImages) => formik.setFieldValue('files', newImages)}
                    error={formik.touched.files && formik.errors.files ? formik.errors.files[0] : undefined}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label="Tour Title"
                      variant="outlined"
                      fullWidth
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name ? Boolean(formik.errors.name) : undefined}
                      helperText={formik.touched.name ? formik.errors.name : null}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      error={formik.touched.description ? Boolean(formik.errors.description) : undefined}
                      helperText={formik.touched.description ? formik.errors.description : null}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box>
                    <TextField
                      label="Price"
                      type="number"
                      variant="outlined"
                      fullWidth
                      name="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      error={formik.touched.price ? Boolean(formik.errors.price) : undefined}
                      helperText={formik.touched.price ? formik.errors.price : null}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <TextField
                      label="Max Group Size"
                      type="number"
                      variant="outlined"
                      fullWidth
                      name="maxGroupSize"
                      value={formik.values.maxGroupSize}
                      onChange={formik.handleChange}
                      error={formik.touched.maxGroupSize ? Boolean(formik.errors.maxGroupSize) : undefined}
                      helperText={formik.touched.maxGroupSize ? formik.errors.maxGroupSize : null}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Start Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    name="startDate"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.startDate ? new Date(formik.values.startDate).toISOString().split('T')[0] : ''}
                    onChange={formik.handleChange}
                    error={formik.touched.startDate ? Boolean(formik.errors.startDate) : undefined}
                    helperText={formik.touched.startDate ? formik.errors.startDate : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="End Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    name="endDate"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.endDate ? new Date(formik.values.endDate)?.toISOString().split('T')[0] : ''}
                    onChange={formik.handleChange}
                    error={formik.touched.endDate ? Boolean(formik.errors.endDate) : undefined}
                    helperText={formik.touched.endDate ? formik.errors.endDate : null}
                  />
                </Grid>
                <AddressForm
                  addressType="address"
                  address={formik.values.address}
                  setAddress={(newAddress) => formik.setFieldValue('address', newAddress)}
                  formik={formik}
                />
              </Grid>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Stack direction="row" width="100%" justifyContent="space-around">
              <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                Update Tour
              </Button>
              <Button onClick={onClose} variant="contained" sx={{ marginTop: 2 }}>
                Cancel
              </Button>
            </Stack>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        sx={{
          '& .MuiDialog-container.MuiDialog-scrollPaper.mui-hz1bth-MuiDialog-container > div': { maxWidth: 800 },
        }}
        open={openHotel}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle>Hotels</DialogTitle>
        <DialogContent>
          <HotelSliderDialog
            hotels={hotels}
            handleClose={handleClose}
            setHotelId={(hotelIds) => formik.setFieldValue('hotelId', hotelIds)}
          />
        </DialogContent>
        <DialogActions>
          <Stack sx={{ width: '100%' }}>
            <Stack>
              {hotels.length / 10 > 1 ? (
                <Pagination
                  count={Math.ceil(hotels.length / 10)}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  color="primary"
                  onChange={(_, newPage) => {
                    setPage(newPage);
                  }}
                />
              ) : null}
            </Stack>
            <Stack direction="row" justifyContent="flex-end">
              <Button onClick={handleClose} variant="contained" sx={{ width: 'fit-content' }} color="primary">
                Close
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
