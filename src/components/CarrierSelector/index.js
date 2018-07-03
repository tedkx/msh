import React from 'react';
import {Grid, Icon, Segment} from 'semantic-ui-react';

const supportedCarriers = [
  {
    name: 'dhl',
    label: 'DHL',
    icon: ''
  }, {
    name: 'acs',
    label: 'ACS',
    icon: ''
  }, {
    name: 'couriercenter',
    label: 'CourierCenter',
    icon: ''
  }, {
    name: 'tnt',
    label: 'TNT',
    icon: ''
  }
]

const CarrierSelector = props => (
  <Segment>
    <Grid doubling columns={supportedCarriers.length}>
      {supportedCarriers.map(c => (
        <Grid.Column>
          <Icon name="truck"/> {c.label}
        </Grid.Column>
      ))
}
    </Grid>
  </Segment>
);

export default CarrierSelector;