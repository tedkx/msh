import {ACTION_TYPES as AT} from './actions';

export const defaultState = {
    carrier: null,

    shipment: null,
    shipmentError: null,
    shipmentPending: false
};

const app = (state = defaultState, action) => {
    switch (action.type) {
        case AT.SET_CARRIER:
            return {
                ...state,
                carrier: action.payload
            };
        case AT.UNSET_CARRIER:
            return {
                ...state,
                carrier: null
            };
        case AT.CLEAR_ALL:
            return {
                ...defaultState
            };
        case AT.FETCH_SHIPMENT:
            return {
                ...state,
                shipment: null,
                shipmentError: null,
                shipmentPending: true
            };
        case AT.FETCH_SHIPMENT_SUCCESS:
            return {
                ...state,
                shipment: action.payload,
                shipmentError: null,
                shipmentPending: false
            };
        case AT.FETCH_SHIPMENT_FAIL:
            return {
                ...state,
                shipment: null,
                shipmentError: action.error,
                shipmentPending: false
            };
        default:
            return state;
    }
};

export default app;
