import axios, { type AxiosResponse } from 'axios';

import { type Hotel, type SearchHotel } from '@/types/hotel';
import { envConfig } from '@/config';

import { type SuccessResponse } from '../auth/client';
import { setupAxiosInterceptors } from '../axios-instance';

class HotelApi {
  constructor() {
    setupAxiosInterceptors((): Promise<void> => Promise.resolve());
  }

  async searchHotels(params: SearchHotel): Promise<{ data?: Hotel[] | undefined; total?: number; error?: string }> {
    try {
      const res: AxiosResponse<SuccessResponse<{ data: Hotel[]; total: number }>> = await axios.get(
        `${envConfig.serverURL}/hotels/search`,
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

export const hotelApi = new HotelApi();
