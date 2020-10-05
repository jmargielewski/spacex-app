import { createSelector } from 'reselect';
import { IErrorState } from './types';
import { IApplicationState } from '../combineReducers';

const errorStateSelector = (state: IApplicationState) => state.error;

export const errorSelector = createSelector(
  errorStateSelector,
  (error: IErrorState) => error.error
);
