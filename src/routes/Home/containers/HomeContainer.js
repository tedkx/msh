import Home from '../components/Home';
import {connect} from 'react-redux';
import {setCarrier, fetchShipment} from 'store/app/actions';

export default connect(state => ({carrier: state.app.carrier}), dispatch => ({
    setCarrier: carrier => dispatch(setCarrier(carrier)),
    fetchShipment: shipmentNumber => dispatch(fetchShipment(shipmentNumber))
}))(Home);
