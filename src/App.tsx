import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Divider, Loader, Dimmer, Message } from 'semantic-ui-react';

import { loadingSelector } from './redux/spaceships/selectors';
import { errorSelector } from './redux/error/selectors';
import { getRockets, getDragons } from './redux/spaceships/actions';

import RocketsList from './components/Rockets/RocketsList';
import DragonsList from './components/Dragons/DragonsList';
import Buttons, { Spaceships } from './components/Buttons';

import './styles.css';

const App: FC = (): JSX.Element => {
  const [shipsType, setShipsType] = useState<Spaceships>(Spaceships.ROCKETS);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getDragons());
  }, []);

  return (
    <Container>
      <Buttons setShipsType={setShipsType} shipsType={shipsType} />
      <Divider />
      {loading && (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}
      {error && (
        <Message negative>
          <Message.Header>{error.message}</Message.Header>
        </Message>
      )}
      {shipsType === Spaceships.ROCKETS ? <RocketsList /> : <DragonsList />}
    </Container>
  );
};

export default App;
