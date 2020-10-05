import { AnyAction, Dispatch } from 'redux';

import apiService from '../../api/api.service';
import { IRocket, IDragon } from '../../api/api.types';

import { IError } from '../error/types';
import { setError, resetError } from '../error/actions';

import {
  ActionTypes as types,
  ILoading,
  IGetRocketsSuccess,
  IGetDragonsSuccess,
} from './types';

export const loading = (payload: boolean): ILoading => ({
  type: types.LOADING,
  payload,
});

export const getRocketsSuccess = (payload: IRocket[]): IGetRocketsSuccess => ({
  type: types.GET_ROCKETS_SUCCESS,
  payload,
});

export const getDragonsSuccess = (payload: IDragon[]): IGetDragonsSuccess => ({
  type: types.GET_DRAGONS_SUCCESS,
  payload,
});

export const getRockets = () => async (
  dispatch: Dispatch<AnyAction>,
): Promise<void> => {
  dispatch<ILoading>(loading(true));

  try {
    const apiResponse = await apiService.getRackets();
    dispatch<IGetRocketsSuccess>(getRocketsSuccess(apiResponse));
    dispatch<IError>(resetError());
  } catch (error) {
    dispatch<IError>(setError(error));
  } finally {
    dispatch<ILoading>(loading(false));
  }
};

export const getDragons = () => async (
  dispatch: Dispatch<AnyAction>,
): Promise<void> => {
  dispatch<ILoading>(loading(true));

  try {
    const apiResponse = await apiService.getDragons();
    dispatch<IGetDragonsSuccess>(getDragonsSuccess(apiResponse));
  } catch (error) {
    dispatch<IError>(setError(error));
  } finally {
    dispatch<ILoading>(loading(false));
  }
};
