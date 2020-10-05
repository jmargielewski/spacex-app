import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import {
  Button,
  Image,
  Modal,
  Table,
  Header,
  Accordion,
  Icon,
  Grid,
  Label,
} from 'semantic-ui-react';

interface IProps {
  data: IModalData;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface IProperty {
  label: string;
  val1: string | number | boolean;
  val2?: string | number;
}

interface IModule {
  label: string;
  props: IProperty[];
}

export interface IModalData {
  active: boolean;
  image: string;
  image2: string;
  name: string;
  cost?: string;
  firstFlight: string;
  description: string;
  props: IProperty[];
  modules: IModule[];
  link: string;
}

const RocketModal: FC<IProps> = ({ data, setIsOpen }): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkIfIcon = (value: string | number | boolean) => {
    if (typeof value === 'boolean') {
      return <Icon name={value ? 'checkmark' : 'close'} />;
    }
    return value;
  };

  return (
    <Modal
      open
      size="large"
      onClose={() => setIsOpen(false)}
      data-testid="rocket-modal"
    >
      <Modal.Content>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column largeScreen={6} tablet={8}>
              <Label
                as="a"
                color={data.active ? 'green' : 'red'}
                content={data.active ? 'active' : 'inactive'}
                ribbon
                style={{ left: '-14px', top: '60px', zIndex: '1' }}
              />
              <Image rounded src={data.image} />
            </Grid.Column>
            <Grid.Column largeScreen={10} tablet={8}>
              <Header size="huge">
                {data.name}
                <Header.Subheader>
                  First flight: {data.firstFlight}
                </Header.Subheader>
                {data.cost && (
                  <Header.Subheader>
                    Cost per flight: {data.cost}
                  </Header.Subheader>
                )}
              </Header>
              {data.description}
              <Table basic="very" unstackable celled compact>
                <Table.Body>
                  {data.props.map((prop) => (
                    <Table.Row key={prop.label}>
                      <Table.Cell>{prop.label}</Table.Cell>
                      <Table.Cell>{prop.val1}</Table.Cell>
                      <Table.Cell>{prop.val2 || ''}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column largeScreen={10} tablet={8}>
              <Accordion styled>
                {data.modules.map((module, i) => (
                  <span key={module.label}>
                    <Accordion.Title
                      active={activeIndex === i}
                      index={i}
                      onClick={() => setActiveIndex(i)}
                    >
                      <Icon name="dropdown" />
                      {module.label}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === i}>
                      <Table basic="very" celled unstackable compact>
                        <Table.Body>
                          {module.props.map((prop) => (
                            <Table.Row key={prop.label}>
                              <Table.Cell>{prop.label}</Table.Cell>
                              <Table.Cell>{checkIfIcon(prop.val1)}</Table.Cell>
                              {prop.val2 && (
                                <Table.Cell>
                                  {checkIfIcon(prop.val2)}
                                </Table.Cell>
                              )}
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </span>
                ))}
              </Accordion>
            </Grid.Column>
            <Grid.Column largeScreen={6} tablet={8} verticalAlign="middle">
              <Image rounded src={data.image2} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button
          as="a"
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          basic
          floated="left"
          icon="wikipedia w"
          content="Wikipedia"
        />

        <Button
          data-testid="rocket-modal-done-btn"
          basic
          content="Done"
          icon="checkmark"
          onClick={() => setIsOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default RocketModal;
