import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen, fireEvent } from '@testing-library/react';

import App from './App';
import rootReducer from './redux/combineReducers';
import { renderWithRedux } from './tests/utils/renderWidthRedux';

afterEach(cleanup);
it('renders Header without crashing', () => {
  renderWithRedux(<App />, rootReducer, {});

  const btnRockets = screen.getByTestId('btn-rockets');
  const btnDragons = screen.getByTestId('btn-dragons');

  expect(btnRockets).toBeInTheDocument();
  expect(btnDragons).toBeInTheDocument();

  expect(screen.getByTestId('rocket-list')).toBeInTheDocument();
  expect(screen.queryByTestId('dragon-list')).not.toBeInTheDocument();
  fireEvent.click(btnDragons);
  expect(screen.getByTestId('dragon-list')).toBeInTheDocument();
  expect(screen.queryByTestId('rocket-list')).not.toBeInTheDocument();
  fireEvent.click(btnRockets);
  expect(screen.getByTestId('rocket-list')).toBeInTheDocument();
  expect(screen.queryByTestId('dragon-list')).not.toBeInTheDocument();
});
