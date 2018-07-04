import {takeEvery, call, put} from 'redux-saga/effects'
import api from 'utils/api';

import {createAction} from '../../utils/redux'
import {ACTION_TYPES as AT} from './actions'

// const defaultFlows = [     [ AT.SUGGESTIONS_FETCH, Api.globalSearch ] ];

export function * fetchShipment(action) {
    try {
        const content = yield call(api.fetchShipment, action.payload)
        yield put(createAction(AT.FETCH_SHIPMENT_SUCCESS, content))
    } catch (e) {
        yield put(createAction(AT.LOGIN_FAIL, null, 'FAILED'));
    }
}

export default function * appSagas() {
    yield takeEvery(AT.FETCH_SHIPMENT, fetchShipment);

    // for(let flow of defaultFlows)     yield S.createDefaultSagaFlow.apply(null,
    // flow);
}