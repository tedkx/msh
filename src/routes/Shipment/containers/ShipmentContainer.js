import ShipmentView from '../components/ShipmentView';
import { connect } from 'react-redux';

export default connect(state => ({ shipment: state.app.shipment }))(
  ShipmentView
);
