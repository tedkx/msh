import React from 'react';
import { object } from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { withShipment } from 'utils/hocs';
import ActionsList from 'components/ActionsList';

class ShipmentView extends React.Component {
  render() {
    return (
      <Segment textAlign="center">
        <pre>{JSON.stringify(this.props.shipment)}</pre>
        <ActionsList />
      </Segment>
    );
  }
}

ShipmentView.propTypes = {
  shipment: object,
};

export default withShipment(ShipmentView);
