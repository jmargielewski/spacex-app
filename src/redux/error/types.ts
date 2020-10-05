import { IErrorResponse } from '../../api/api.types';

export enum ActionTypes {
  ERROR = '@spacex/error/ERROR',
}

export interface IErrorState {
  error: IErrorResponse | null;
}

export interface IError {
  type: ActionTypes.ERROR;
  payload: IErrorResponse | null;
}

export type IErrorActions = IError;
