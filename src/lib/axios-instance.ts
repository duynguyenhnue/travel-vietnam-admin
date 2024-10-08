// lib/axiosInstance.ts
import axios, { type AxiosError, type AxiosHeaders, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

import { envConfig, localStorageConfig } from '@/config';

import { type SuccessResponse } from './auth/client';

interface RefreshTokenResponse {
  access_token: string;
}

// Constants for local storage keys
const ACCESS_TOKEN = localStorageConfig.accessToken;
const REFRESH_TOKEN = localStorageConfig.refreshToken;
const TIMEOUT = 1 * 60 * 1000; // 1 minute timeout
axios.defaults.timeout = TIMEOUT;

const setupAxiosInterceptors = (onUnauthenticated: () => void): void => {
  const onRequestSuccess = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // Ensure headers exist and set Authorization token
      if (!config.headers) {
        config.headers = {} as AxiosHeaders;
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  // Response interceptor
  const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;

  const onResponseError = async (err: AxiosError): Promise<never> => {
    if (err) {
      const status = err.response?.status;

      // Handle unauthorized errors (401, 403)
      if (status === 403 || status === 401) {
        try {
          const refreshToken = localStorage.getItem(REFRESH_TOKEN);
          if (!refreshToken) {
            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(REFRESH_TOKEN);
          } else {
            const newAccessToken: AxiosResponse<SuccessResponse<RefreshTokenResponse>> = await axios.post(
              `${envConfig.serverURL}/auth/refresh-token`,
              {
                refresh_token: refreshToken,
              }
            );
            if (newAccessToken.data.data) {
              localStorage.setItem(ACCESS_TOKEN, newAccessToken.data.data?.access_token);
              const originalRequest = err.config!;
              originalRequest.headers.Authorization = `Bearer ${newAccessToken.data.data.access_token}`;
              return axios(originalRequest);
            }
          }
        } catch (error) {
          localStorage.removeItem(ACCESS_TOKEN);
          localStorage.removeItem(REFRESH_TOKEN);
          onUnauthenticated();
        }
      }
    }
    return Promise.reject(err);
  };

  // Apply the interceptors to Axios
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export { setupAxiosInterceptors, axios };
