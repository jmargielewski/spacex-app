import { Reducer } from 'redux';
import reducerCreator from '../reducers';
import { ActionTypes as types, IError, IErrorState } from './types';

const initialState: IErrorState = {
  error: null,
};

const error: Reducer<IErrorState, IError> = (state, { payload }) => ({
  ...state,
  error: payload,
});

const actionHandlers = {
  [types.ERROR]: error,
};

export type ErrorActionHandlers = typeof actionHandlers;
export default reducerCreator(initialState, actionHandlers);
