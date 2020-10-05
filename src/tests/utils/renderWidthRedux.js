import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';

export function renderWithRedux(component, reducer, mockStore) {
  const store = createStore(reducer, mockStore, applyMiddleware(thunk));

  return render(<Provider store={store}>{component}</Provider>);
}
