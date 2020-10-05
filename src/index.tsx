import React, { FC } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import { useStore } from './redux/store';

const Root: FC = (): JSX.Element => (
  <Provider store={useStore(undefined)}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById('root'));
