import React, { FC } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

export interface ICardData {
  id: string;
  name: string;
  image: string;
  first_flight: string;
  description: string;
}

interface IProps {
  data: ICardData;
  openModal(id: string): void;
}

const CardEl: FC<IProps> = ({ data, openModal }): JSX.Element => (
  <Card data-testid="rocket-list-card">
    <Card.Content>
      <Image floated="right" size="small" src={data.image} />
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>First flight: {data.first_flight}</Card.Meta>
      <Card.Description>{data.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button
        data-testid="rocket-card-btn"
        basic
        icon="info circle"
        content="Get More Info"
        onClick={() => openModal(data.id)}
      />
    </Card.Content>
  </Card>
);

export default CardEl;
