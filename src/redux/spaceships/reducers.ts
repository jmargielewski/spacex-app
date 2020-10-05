import { Reducer } from 'redux';

import {
  ActionTypes as types,
  ISpaceshipsState,
  IGetRocketsSuccess,
  IGetDragonsSuccess,
  ILoading,
} from './types';
import reducerCreator from '../reducers';

const initialState: ISpaceshipsState = {
  loading: false,
  rockets: [],
  dragons: [],
};

// @ts-ignore
const loading: Reducer<ISpaceshipsState, ILoading> = (state, { payload }) => ({
  ...state,
  loading: payload,
});

// @ts-ignore
const getRockets: Reducer<ISpaceshipsState, IGetRocketsSuccess> = (
  state = initialState,
  { payload },
) => ({
  ...state,
  rockets: payload,
});

const getDragons: Reducer<ISpaceshipsState, IGetDragonsSuccess> = (
  state = initialState,
  { payload },
) => ({
  ...state,
  dragons: payload,
});

const actionHandlers = {
  [types.LOADING]: loading,
  [types.GET_ROCKETS_SUCCESS]: getRockets,
  [types.GET_DRAGONS_SUCCESS]: getDragons,
};

export type SpaceshipsActionHandlers = typeof actionHandlers;
export default reducerCreator(initialState, actionHandlers);
