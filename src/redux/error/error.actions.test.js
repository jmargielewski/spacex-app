import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import { ActionTypes as types } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Error actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const mockError = {
    message: 'Error message',
    status: 404,
    data: {},
  };

  it('handles setError action', () => {
    const expectedActions = [
      {
        type: types.ERROR,
        payload: mockError,
      },
    ];
    store.dispatch(actions.setError(mockError));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('handles resetError action', () => {
    const expectedActions = [
      {
        type: types.ERROR,
        payload: null,
      },
    ];
    store.dispatch(actions.resetError());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
