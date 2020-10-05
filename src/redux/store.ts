import { useMemo } from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { IApplicationState } from './combineReducers';

const initialAppState = {} as IApplicationState;

function initializeStore(preloadedState = initialAppState) {
  const middlewares = [thunk];

  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
}

export function useStore(initialState: undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
