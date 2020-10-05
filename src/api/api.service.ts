import axios, { AxiosResponse, AxiosError } from 'axios';
import { errorHandling } from './api.errorHandling';
import { IDragon, IRocket } from './api.types';

export const API_BASE_URL = 'https://api.spacexdata.com/v3';

export const httpClient = axios.create({
  headers: {
    accept: 'application/json',
    'content-Type': 'application/json',
  },
  baseURL: API_BASE_URL,
});

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => errorHandling(error),
);

const getRackets = async (): Promise<IRocket[]> => {
  const response = await httpClient.get<IRocket[]>('/rockets');
  return response.data;
};

const getDragons = async (): Promise<IDragon[]> => {
  const response = await httpClient.get<IDragon[]>('/dragons');
  return response.data;
};

export default {
  getRackets,
  getDragons,
};
