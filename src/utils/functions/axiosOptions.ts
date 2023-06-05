import { AxiosRequestConfig } from 'axios';

export const getHeaderWithAccessToken = (
  accessToken: string,
): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
