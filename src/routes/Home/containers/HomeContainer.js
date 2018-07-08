import Home from '../components/Home';
import {connect} from 'react-redux';
import {setCarrier, fetchShipment} from 'store/app/actions';

const mapStateToProps = state => ({carrier: state.app.carrier, shipment: state.app.shipment, shipmentError: state.app.shipmentError, shipmentPending: state.app.shipmentPending});

const mapDispatchToProps = dispatch => ({
  setCarrier: carrier => dispatch(setCarrier(carrier)),
  fetchShipment: (carrier, shipmentNumber) => dispatch(fetchShipment(carrier, shipmentNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
