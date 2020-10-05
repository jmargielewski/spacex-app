import { IErrorResponse } from '../../api/api.types';
import { ActionTypes as types, IError } from './types';

export const setError = (payload: IErrorResponse): IError => ({
  type: types.ERROR,
  payload,
});

export const resetError = (): IError => ({
  type: types.ERROR,
  payload: null,
});
