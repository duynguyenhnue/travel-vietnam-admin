'use client';

import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'; // Import an icon for the button
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { useFormik } from 'formik';
import Slider from 'react-slick';

import { type Address, type Location } from '@/types';
import { type Hotel } from '@/types/hotel';
import { type CreateTourForm } from '@/types/tour';
import { hotelApi } from '@/lib/hotel/hotel';
import { tourApi } from '@/lib/tour/tour';
import { validationTour } from '@/lib/yub/tour';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ItemCard } from '@/components/common/item-card';

interface AddressFormProps {
  addressType: 'destination' | 'departurePoint';
  address: Address;
  setAddress: (newAddress: Address) => void;
  formik: {
    touched: {
      destination?: {
        province?: boolean;
        district?: boolean;
        ward?: boolean;
      };
      departurePoint?: {
        province?: boolean;
        district?: boolean;
        ward?: boolean;
      };
    };
    errors: {
      destination?: {
        province?: string;
        district?: string;
        ward?: string;
      };
      departurePoint?: {
        province?: string;
        district?: string;
        ward?: string;
      };
    };
  };
}

function AddressForm(props: AddressFormProps): React.ReactElement {
  const { addressType, address, setAddress, formik } = props;

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
    if (address.province) {
      void fetch(`https://esgoo.net/api-tinhthanh/2/${address.province}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setDistricts(data?.data);
        });
    } else {
      setDistricts([]);
    }
  }, [address.province]);

  useEffect(() => {
    if (address.district) {
      void fetch(`https://esgoo.net/api-tinhthanh/3/${address.district}.htm`)
        .then((response) => response.json())
        .then((data: { data: Location[] }) => {
          setWards(data?.data);
        });
    } else {
      setWards([]);
    }
  }, [address.district]);

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    field: 'province' | 'district' | 'ward'
  ): void => {
    const selectedValue = e.target.value;
    const newAddress = { ...address, [field]: selectedValue };

    if (field === 'province') {
      newAddress.district = '';
      newAddress.ward = '';
    }

    if (field === 'district') {
      newAddress.ward = '';
    }

    setAddress(newAddress);
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">{addressType === 'destination' ? 'Destination' : 'Departure Point'}</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          variant="outlined"
          onChange={(e) => {
            handleAddressChange(e, 'province');
          }}
          required
          value={address.province || ''}
          fullWidth
          label="Province"
          error={formik.touched[addressType]?.province ? Boolean(formik.errors[addressType]?.province) : undefined}
          helperText={formik.touched[addressType]?.province ? formik.errors[addressType]?.province : null}
          SelectProps={{ native: true }}
        >
          <option value="" disabled />
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          variant="outlined"
          onChange={(e) => {
            handleAddressChange(e, 'district');
          }}
          required
          label="District"
          value={address.district || ''}
          disabled={!address.province}
          fullWidth
          error={formik.touched[addressType]?.district ? Boolean(formik.errors[addressType]?.district) : undefined}
          helperText={formik.touched[addressType]?.district ? formik.errors[addressType]?.district : null}
          SelectProps={{ native: true }}
        >
          <option value="" disabled />
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          variant="outlined"
          onChange={(e) => {
            handleAddressChange(e, 'ward');
          }}
          label="Ward"
          required
          value={address.ward || ''}
          disabled={!address.district}
          fullWidth
          error={formik.touched[addressType]?.ward ? Boolean(formik.errors[addressType]?.ward) : undefined}
          helperText={formik.touched[addressType]?.ward ? formik.errors[addressType]?.ward : null}
          SelectProps={{ native: true }}
        >
          <option value="" disabled />
          {wards.map((ward) => (
            <option key={ward.id} value={ward.id}>
              {ward.name}
            </option>
          ))}
        </TextField>
      </Grid>
    </>
  );
}

interface ImageUploadProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  error?: string | string[] | undefined;
}

function ImageUpload(props: ImageUploadProps): React.ReactElement {
  const { images, setImages, error } = props;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;

    if (files) {
      const validImageTypes = ['image/jpeg', 'image/png'];
      const fileArray: string[] = [];

      const fileListArray = Array.from(files);

      for (const file of fileListArray) {
        if (validImageTypes.includes(file.type)) {
          fileArray.push(URL.createObjectURL(file));
        }
      }

      if (fileArray.length > 0) {
        setImages([...images, ...fileArray]);
      }
    }
  };

  const handleRemoveImage = (index: number): void => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Stack>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Upload Photos
        </Typography>

        <Button
          variant="outlined"
          component="label"
          sx={{
            margin: '10px 0',
            color: '#1976d2',
            borderColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#e3f2fd',
            },
          }}
        >
          Choose images
          <input type="file" multiple accept="image/jpeg,image/png" onChange={handleImageChange} hidden />
        </Button>

        {error ? (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        ) : null}
      </Stack>
      <Grid container spacing={1} sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', py: 2 }}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={image}>
            <Card>
              <CardMedia
                component="img"
                image={image}
                alt={`Uploaded Image ${index + 1}`}
                sx={{ height: 140, objectFit: 'cover' }}
              />
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    handleRemoveImage(index);
                  }}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#d32f2f',
                    },
                  }}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

interface HotelSliderDialogProps {
  hotels: Hotel[];
  handleClose: () => void;
  setHotelId: (hotelId: string) => void;
}

function HotelSliderDialog(props: HotelSliderDialogProps): React.ReactElement {
  const { hotels, handleClose, setHotelId } = props;

  const theme = useTheme();
  const isScreenSm = useMediaQuery(theme.breakpoints.up('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <DialogContent>
      <Stack width="100%">
        {isScreenSm ? (
          <Grid container spacing={2}>
            {hotels.map((hotel) => (
              <Grid item xs={4} key={hotel._id}>
                <ItemCard
                  data={hotel}
                  onSelect={() => {
                    setHotelId(hotel._id || '');
                    handleClose();
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Slider {...settings}>
            {hotels.map((hotel) => (
              <Stack key={hotel._id}>
                <ItemCard
                  data={hotel}
                  onSelect={() => {
                    setHotelId;
                    handleClose();
                  }}
                />
              </Stack>
            ))}
          </Slider>
        )}
      </Stack>
    </DialogContent>
  );
}

export function CreateTour(): React.ReactElement {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const formik = useFormik<CreateTourForm>({
    initialValues: {
      files: [],
      title: '',
      desc: '',
      price: 0,
      maxGroupSize: 1,
      hotelId: '',
      startDate: '',
      endDate: '',
      destination: { province: '', district: '', ward: '' },
      departurePoint: { province: '', district: '', ward: '' },
    },
    validationSchema: validationTour,
    onSubmit: async (values) => {
      await tourApi.createTour(values);
      handleCloseDialog();
    },
  });

  const handleAddClick = (): void => {
    setDialogOpen(true);
    setVisible(true);
  };

  const handleCloseDialog = (): void => {
    setDialogOpen(false);
    formik.resetForm();
  };

  const handleCloseDialogTour = (): void => {
    setVisible(false);
  };

  const handleClickOpen = async (): Promise<void> => {
    const response = await hotelApi.searchHotels({ limit: 10, page });
    setHotels(response.data || []);
    setOpen(true);
    handleCloseDialogTour();
  };

  const handleClose = (): void => {
    setOpen(false);
    handleAddClick();
  };

  return (
    <>
      <Button variant="outlined" startIcon={<PlusIcon />} onClick={handleAddClick}>
        Create New Tour
      </Button>

      <Dialog
        sx={{
          '& .MuiDialog-container.MuiDialog-scrollPaper.mui-hz1bth-MuiDialog-container > div': {
            maxWidth: 800,
            visibility: visible ? 'visible' : 'hidden',
          },
        }}
        open={dialogOpen}
        onClose={handleCloseDialog}
        fullWidth
      >
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <DialogTitle>
            <Typography variant="h3" textAlign="center" sx={{ fontWeight: 'bold' }}>
              Create Tour
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
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={formik.touched.title ? Boolean(formik.errors.title) : undefined}
                      helperText={formik.touched.title ? formik.errors.title : null}
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
                      name="desc"
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      error={formik.touched.desc ? Boolean(formik.errors.desc) : undefined}
                      helperText={formik.touched.desc ? formik.errors.desc : null}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
                  <Button fullWidth sx={{ height: '100%' }} variant="contained" onClick={handleClickOpen}>
                    Select Hotel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Start Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    name="startDate"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.startDate}
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
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    error={formik.touched.endDate ? Boolean(formik.errors.endDate) : undefined}
                    helperText={formik.touched.endDate ? formik.errors.endDate : null}
                  />
                </Grid>
                <AddressForm
                  addressType="destination"
                  address={formik.values.destination}
                  setAddress={(newAddress) => formik.setFieldValue('destination', newAddress)}
                  formik={formik}
                />
                <AddressForm
                  addressType="departurePoint"
                  address={formik.values.departurePoint}
                  setAddress={(newAddress) => formik.setFieldValue('departurePoint', newAddress)}
                  formik={formik}
                />
              </Grid>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Stack direction="row" width="100%" justifyContent="space-around">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: 2 }}
                onSubmit={() => {
                  formik.handleSubmit();
                }}
              >
                Create Tour
              </Button>
              <Button onClick={handleCloseDialog} variant="contained" sx={{ marginTop: 2 }}>
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
        open={open}
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
              <Pagination
                count={Math.ceil(hotels.length / 10)}
                sx={{ display: 'flex', justifyContent: 'center' }}
                color="primary"
                onChange={(_, newPage) => {
                  setPage(newPage);
                }}
              />
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
