import * as Yup from 'yup';

import { Status } from '@/types/roles';

export const validationHotel = Yup.object().shape({
  files: Yup.array().required('At least one image is required.').min(1, 'At least one image is required.'),
  name: Yup.string()
    .required('Title is required.')
    .min(3, 'Title must be at least 3 characters long.')
    .max(100, 'Title cannot exceed 100 characters.'),

  description: Yup.string()
    .required('Description is required.')
    .min(10, 'Description must be at least 10 characters long.')
    .max(1000, 'Description cannot exceed 1000 characters.'),

  price: Yup.number()
    .required('Price is required.')
    .typeError('Price must be a numeric value.')
    .positive('Price must be a positive number.'),

  maxGroupSize: Yup.number()
    .required('Max Group Size is required.')
    .min(1, 'Max Group Size must be at least 1.')
    .max(50, 'Max Group Size cannot exceed 50.'),

  startDate: Yup.date().required('Start Date is required.').typeError('Start Date must be a valid date.'),

  endDate: Yup.date()
    .required('End Date is required.')
    .typeError('End Date must be a valid date.')
    .min(Yup.ref('startDate'), 'End Date must be after Start Date.'),

  address: Yup.object().shape({
    province: Yup.string().required('Province is required.'),
    district: Yup.string().required('District is required.'),
    ward: Yup.string().required('Ward is required.'),
  }),

  amenities: Yup.array().of(Yup.string()).required('At least one amenity is required.'),
});

export const validationTour = Yup.object().shape({
  files: Yup.array().required('At least one image is required.').min(1, 'At least one image is required.'),
  title: Yup.string()
    .required('Title is required.')
    .min(3, 'Title must be at least 3 characters long.')
    .max(100, 'Title cannot exceed 100 characters.'),

  desc: Yup.string()
    .required('Description is required.')
    .min(10, 'Description must be at least 10 characters long.')
    .max(1000, 'Description cannot exceed 1000 characters.'),

  price: Yup.number()
    .required('Price is required.')
    .typeError('Price must be a numeric value.')
    .positive('Price must be a positive number.'),

  maxGroupSize: Yup.number()
    .required('Max Group Size is required.')
    .min(1, 'Max Group Size must be at least 1.')
    .max(50, 'Max Group Size cannot exceed 50.'),

  hotelId: Yup.string()
    .required('Hotel ID is required.')
    .matches(/^[0-9a-fA-F]{24}$/, 'Hotel ID must be a valid MongoDB ObjectId.'),

  startDate: Yup.date().required('Start Date is required.').typeError('Start Date must be a valid date.'),

  endDate: Yup.date()
    .required('End Date is required.')
    .typeError('End Date must be a valid date.')
    .min(Yup.ref('startDate'), 'End Date must be after Start Date.'),

  destination: Yup.object().shape({
    province: Yup.string().required('Province is required.'),
    district: Yup.string().required('District is required.'),
    ward: Yup.string().required('Ward is required.'),
  }),

  departurePoint: Yup.object().shape({
    province: Yup.string().required('Province is required.'),
    district: Yup.string().required('District is required.'),
    ward: Yup.string().required('Ward is required.'),
  }),
});

export const validationRoles = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.')
    .min(3, 'Name must be at least 3 characters long.')
    .max(100, 'Name cannot exceed 100 characters.'),

  description: Yup.string()
    .optional() // Because description is marked as optional in the class.
    .min(10, 'Description must be at least 10 characters long.')
    .max(1000, 'Description cannot exceed 1000 characters.'),

  permissions: Yup.array().of(Yup.string().required('Permission is required.')).required('Permissions are required.'),

  status: Yup.mixed().oneOf(Object.values(Status), 'Invalid status.').required('Status is required.'),
});
