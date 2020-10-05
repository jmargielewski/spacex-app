import { combineReducers } from 'redux';

import { Actions } from './reducers';
import error from './error/reducers';
import { IErrorState } from './error/types';

import spaceships from './spaceships/reducers';
import { ISpaceshipsState } from './spaceships/types';

export interface IApplicationState {
  error: IErrorState;
  spaceships: ISpaceshipsState;
}

const appReducer = combineReducers<IApplicationState>({
  error,
  spaceships,
});

const rootReducer = (
  state: IApplicationState = {} as IApplicationState,
  action: Actions
) => {
  return appReducer(state, action);
};

export default rootReducer;
