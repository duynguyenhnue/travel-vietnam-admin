import { type Address } from '.';

export class Phone {
  country: string | undefined;
  number: string | undefined;
}

export interface User {
  _id?: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  address: Address;
  phone: Phone;
  createdAt: string;
  avatar: string;
}
