import { type Address } from '.';
import { type Review } from './tour';

export interface SearchHotel {
  search?: string;
  limit: number;
  page: number;
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
}
