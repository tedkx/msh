import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

import truck from 'dummyAssets/truck.jpg';

const supportedCarriers = [
  {
    name: 'dhl',
    label: 'DHL',
    icon: '',
  },
  {
    name: 'acs',
    label: 'ACS',
    icon: '',
  },
  {
    name: 'couriercenter',
    label: 'CourierCenter',
    icon: '',
  },
  {
    name: 'tnt',
    label: 'TNT',
    icon: '',
  },
];

const CarrierSelector = props => (
  <Segment>
    <Grid doubling columns={supportedCarriers.length}>
      {supportedCarriers.map(c => (
        <Grid.Column
          key={`col-${c.name}`}
          textAlign="center"
          as="a"
          href="#"
          onClick={e => props.onSelect(c)}
        >
          <Image src={truck} width="80" centered /> {c.label}
        </Grid.Column>
      ))}
    </Grid>
  </Segment>
);

export default CarrierSelector;
