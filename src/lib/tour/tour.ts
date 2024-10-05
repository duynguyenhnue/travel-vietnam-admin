import axios, { type AxiosResponse } from 'axios';

import { Tour } from '@/types/tour';
import { envConfig } from '@/config';

import { type SuccessResponse } from '../auth/client';
import { setupAxiosInterceptors } from '../axios-instance';

export interface SearchTour {
  page: number;
  limit: number;
  title?: string;
  groupSize?: string;
  price?: string;
  status?: string;
}

class TourApi {
  constructor() {
    setupAxiosInterceptors((): Promise<void> => Promise.resolve());
  }

  async searchTours(params: SearchTour): Promise<{ data?: Tour[] | undefined; total?: number; error?: string }> {
    try {
      const res: AxiosResponse<SuccessResponse<{ data: Tour[]; total: number }>> = await axios.get(
        `${envConfig.serverURL}/tours/search`,
        {
          params,
        }
      );
      return { data: res.data.data?.data, total: res.data.data?.total };
    } catch (error) {
      return { error: 'Tour not found' };
    }
  }
}

export const tourApi = new TourApi();
