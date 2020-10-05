import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';

import Modal from '../Modal';
import ListCard from '../CardEl';

import { normalizeCardData, normalizeRocketData } from '../../helpers';
import { IRocket } from '../../api/api.types';
import { rocketsSelector } from '../../redux/spaceships/selectors';

const RocketsList: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRocket, setSelectedRocket] = useState<IRocket>({} as IRocket);

  const rockets = useSelector(rocketsSelector);

  const handleOpenModal = (id: string) => {
    const selectedRocket = rockets.find((r) => r.id === id);

    if (selectedRocket) {
      setSelectedRocket(selectedRocket);
      setIsOpen(true);
    }
  };

  return (
    <Card.Group
      stackable
      itemsPerRow={2}
      data-testid="rocket-list"
      style={{ position: 'relative' }}
    >
      {rockets.map((rocket) => (
        <ListCard
          key={rocket.id}
          data={normalizeCardData(rocket)}
          openModal={handleOpenModal}
        />
      ))}
      {isOpen && (
        <Modal
          data={normalizeRocketData(selectedRocket)}
          setIsOpen={setIsOpen}
        />
      )}
    </Card.Group>
  );
};

export default RocketsList;
