import { type Address } from '.';
import { type Review } from './tour';

export interface SearchHotel {
  page?: number;
  limit?: number;
  title?: string;
  price?: string;
  groupSize?: string;
  status?: string;
}

export interface CreateHotelForm {
  name: string;
  files: File[] | string[];
  description: string;
  price: number;
  amenities: string[];
  address: Address;
  maxGroupSize: number;
  startDate: string;
  endDate: string;
}

export interface Hotel {
  _id?: string;
  name?: string;

  address?: Address;

  price?: number;

  reviews?: Review[];

  description?: string;

  amenities?: string[];

  photos: string[];

  maxGroupSize?: number;

  startDate?: string;

  endDate?: string;
}
