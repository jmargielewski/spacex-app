import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  mock_state,
  mock_dragons,
  mock_rockets,
} from '../../tests/__mocks__/mock_store';
import * as actions from './actions';
import { ActionTypes as types } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(mock_state);

describe('spaceships actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('handles loading action', () => {
    const expectedActions = [
      {
        type: types.LOADING,
        payload: true,
      },
    ];
    store.dispatch(actions.loading(true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('handles get_rocket_success action', () => {
    const expectedActions = [
      {
        type: types.GET_ROCKETS_SUCCESS,
        payload: mock_rockets,
      },
    ];
    store.dispatch(actions.getRocketsSuccess(expectedActions[0].payload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('handles get_dragon_success action', () => {
    const expectedActions = [
      {
        type: types.GET_DRAGONS_SUCCESS,
        payload: mock_dragons,
      },
    ];
    store.dispatch(actions.getDragonsSuccess(expectedActions[0].payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
