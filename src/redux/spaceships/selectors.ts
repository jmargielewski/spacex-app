import { createSelector } from 'reselect';
import { ISpaceshipsState } from './types';
import { IApplicationState } from '../combineReducers';

const spaceshipsStateSelector = (state: IApplicationState) => state.spaceships;

export const rocketsSelector = createSelector(
  spaceshipsStateSelector,
  (spaceships: ISpaceshipsState) => spaceships.rockets,
);

export const dragonsSelector = createSelector(
  spaceshipsStateSelector,
  (spaceships: ISpaceshipsState) => spaceships.dragons,
);

export const loadingSelector = createSelector(
  spaceshipsStateSelector,
  (spaceships: ISpaceshipsState) => spaceships.loading,
);
