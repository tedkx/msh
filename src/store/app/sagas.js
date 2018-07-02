import {takeEvery, call, put, select} from 'redux-saga/effects'

import {createAction} from '../../utils/redux'
import {ACTION_TYPES as AT} from './actions'

// const defaultFlows = [     [ AT.SUGGESTIONS_FETCH, Api.globalSearch ] ];

export function * fetchShipment(action) {
    try {
        // const content = yield call(Api.login, action.payload)
        const content = {
            id: 1234,
            awb: '1234'
        };
        yield put(createAction(AT.FETCH_SHIPMENT_SUCCESS, content))
    } catch (e) {
        // let error = S.extractSagaError(e); if(error.type !=
        // ResponseErrorTypes.Unauthenticated)     Logger.error('login error', e,
        // error);
        yield put(createAction(AT.LOGIN_FAIL, null, 'FAILED'));
    }
}

export default function * appSagas() {
    yield takeEvery(AT.FETCH_SHIPMENT, fetchShipment);

    // for(let flow of defaultFlows)     yield S.createDefaultSagaFlow.apply(null,
    // flow);
}