import React from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react';
import {carriers as carriersObj} from 'utils/carrierData';

import truck from 'dummyAssets/truck.jpg';

const carriers = Object.values(carriersObj);

const CarrierSelector = props => (
  <Segment>
    <Grid doubling columns={carriers.length}>
      {carriers.map(c => (
        <Grid.Column
          key={`col-${c.name}`}
          textAlign="center"
          as="a"
          href="#"
          onClick={e => props.onSelect(c)}>
          <Image src={truck} width="80" centered/> {c.label}
        </Grid.Column>
      ))}
    </Grid>
  </Segment>
);

export default CarrierSelector;
