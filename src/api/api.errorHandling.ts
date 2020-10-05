import { AxiosError } from 'axios';
import { IErrorResponse } from './api.types';

export const errorHandling = (error: AxiosError): never => {
  if (error.response) {
    const out: IErrorResponse = {
      message: error.response.statusText || 'Something went wrong.',
      status: error.response.status,
      data: error.response.data,
    };

    throw out;
  }
  throw {
    message: 'Something went wrong.',
    data: {},
  };
};
