import axios, { type AxiosResponse } from 'axios';

import type { User } from '@/types/user';
import { envConfig } from '@/config';

import { type SuccessResponse } from '../auth/client';
import { setupAxiosInterceptors } from '../axios-instance';

export interface Address {
  province: string;
  district: string;
  ward: string;
}

export interface Phone {
  country: string;
  number: string;
}

export interface SignUpParams {
  email: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  address: Address;
  phone: Phone;
}

export interface SearchUsers {
  page: number;
  limit: number;
  fullName: string;
  email: string;
}

class UserApi {
  constructor() {
    setupAxiosInterceptors((): Promise<void> => Promise.resolve());
  }

  async createUser(data: SignUpParams): Promise<{ error?: string }> {
    try {
      await axios.post(`${envConfig.serverURL}/auth/register`, data);
      return { error: '' };
    } catch (error) {
      return { error: 'Failed to sign up' };
    }
  }

  async searchUsers(params: SearchUsers): Promise<{ data?: User[] | undefined; total?: number; error?: string }> {
    try {
      const res: AxiosResponse<SuccessResponse<{ data: User[]; total: number }>> = await axios.get(
        `${envConfig.serverURL}/users/search`,
        {
          params,
        }
      );
      return { data: res.data.data?.data, total: res.data.data?.total };
    } catch (error) {
      return { error: 'User not found' };
    }
  }
}

export const userApi = new UserApi();
