import React, { FC, Dispatch } from 'react';
import { Button } from 'semantic-ui-react';

export enum Spaceships {
  ROCKETS = 'Rockets',
  DRAGONS = 'Dragons',
}

interface IProps {
  shipsType: Spaceships;
  setShipsType: Dispatch<Spaceships>;
}

const Buttons: FC<IProps> = ({ setShipsType, shipsType }): JSX.Element => (
  <div className="btn-group">
    <Button.Group attached>
      <Button
        data-testid="btn-rockets"
        onClick={() => setShipsType(Spaceships.ROCKETS)}
        active={shipsType === Spaceships.ROCKETS}
      >
        {Spaceships.ROCKETS}
      </Button>
      <Button.Or />
      <Button
        data-testid="btn-dragons"
        onClick={() => setShipsType(Spaceships.DRAGONS)}
        active={shipsType === Spaceships.DRAGONS}
      >
        {Spaceships.DRAGONS}
      </Button>
    </Button.Group>
  </div>
);

export default Buttons;
