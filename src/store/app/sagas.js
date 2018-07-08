import {takeEvery, call, put} from 'redux-saga/effects'
import api from 'utils/api';

import {createAction, createDefaultSagaFlow} from '../../utils/redux'
import {ACTION_TYPES as AT} from './actions'

const defaultFlows = [
    [AT.FETCH_SHIPMENT, api.fetchShipment]
];

// export function * fetchShipment(action) {     try {         const content =
// yield call(api.fetchShipment, action.payload)         yield
// put(createAction(AT.FETCH_SHIPMENT_SUCCESS, content))     } catch (e) {
//   yield put(createAction(AT.LOGIN_FAIL, null, 'FAILED'));     } }

export default function * appSagas() {
    //yield takeEvery(AT.FETCH_SHIPMENT, fetchShipment);

    for (let flow of defaultFlows) 
        yield createDefaultSagaFlow.apply(null, flow);
    }