import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.API_KEY}` },
});

const handleSuccess = (res: AxiosResponse) => {
  if (res.request) return res.data;
};

const handleError = async (err: AxiosError) => {
  return Promise.reject(err);
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config = {
      ...config,
      data: config.data,
      withCredentials: true,
    };

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
