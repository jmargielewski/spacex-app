import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';

import ListCard from '../CardEl';
import Modal from '../Modal';

import { normalizeCardData, normalizeDragonData } from '../../helpers';
import { IDragon } from '../../api/api.types';
import { dragonsSelector } from '../../redux/spaceships/selectors';

const DragonsList: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDragon, setSelectedDragon] = useState<IDragon>({} as IDragon);

  const dragons = useSelector(dragonsSelector);

  const handleOpenModal = (id: string) => {
    const selectedDragon = dragons.find((d) => d.id === id);

    if (selectedDragon) {
      setSelectedDragon(selectedDragon);
      setIsOpen(true);
    }
  };

  return (
    <Card.Group stackable itemsPerRow={2} data-testid="dragon-list">
      {dragons.map((dragon) => (
        <ListCard
          key={dragon.id}
          data={normalizeCardData(dragon)}
          openModal={handleOpenModal}
        />
      ))}
      {isOpen && (
        <Modal
          data={normalizeDragonData(selectedDragon)}
          setIsOpen={setIsOpen}
        />
      )}
    </Card.Group>
  );
};

export default DragonsList;
