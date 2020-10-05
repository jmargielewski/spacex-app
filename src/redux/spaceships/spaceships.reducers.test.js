import reducer from './reducers';
import { ActionTypes as types } from './types';

import {
  mock_state,
  mock_empty_state,
  mock_dragons,
  mock_rockets,
} from '../../tests/__mocks__/mock_store';

const initialState = {
  loading: false,
  rockets: [],
  dragons: [],
};

describe('header reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle LOADING', () => {
    expect(
      reducer(initialState, {
        type: types.LOADING,
        payload: true,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_ROCKETS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.GET_ROCKETS_SUCCESS,
        payload: mock_rockets,
      }),
    ).toEqual({
      ...initialState,
      rockets: mock_rockets,
    });
  });

  it('should handle GET_DRAGONS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.GET_DRAGONS_SUCCESS,
        payload: mock_dragons,
      }),
    ).toEqual({
      ...initialState,
      dragons: mock_dragons,
    });
  });
});
