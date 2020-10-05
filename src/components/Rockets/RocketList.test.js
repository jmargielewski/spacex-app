import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent } from '@testing-library/react';
import { mock_state } from '../../tests/__mocks__/mock_store';

import RocketsList from './RocketsList';
import rootReducer from '../../redux/combineReducers';
import { renderWithRedux } from '../../tests/utils/renderWidthRedux';

afterEach(cleanup);
it('should render list of rockets', () => {
  const { getAllByTestId } = renderWithRedux(
    <RocketsList />,
    rootReducer,
    mock_state,
  );

  expect(getAllByTestId('rocket-list-card')).toHaveLength(
    mock_state.spaceships.rockets.length,
  );
});

it('should open modal if click on Get-More-Info btn', () => {
  const { getAllByText, getByTestId, queryByTestId } = renderWithRedux(
    <RocketsList />,
    rootReducer,
    mock_state,
  );

  expect(queryByTestId('rocket-modal')).not.toBeInTheDocument();
  fireEvent.click(getAllByText('Get More Info')[0]);
  expect(getByTestId('rocket-modal')).toBeInTheDocument();
  expect();
});

it('should close modal if click on Done btn', () => {
  const { getAllByText, getByTestId, queryByTestId } = renderWithRedux(
    <RocketsList />,
    rootReducer,
    mock_state,
  );

  expect(queryByTestId('rocket-modal')).not.toBeInTheDocument();
  fireEvent.click(getAllByText('Get More Info')[0]);
  expect(getByTestId('rocket-modal')).toBeInTheDocument();
  fireEvent.click(getByTestId('rocket-modal-done-btn'));
  expect(queryByTestId('rocket-modal')).not.toBeInTheDocument();
});
