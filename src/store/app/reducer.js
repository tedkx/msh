import {ACTION_TYPES as AT} from './actions'

export const defaultState = {
    companyName: 'default',

    shipment: null,
    shipmentError: null,
    shipmentPending: false
}

const app = (state = defaultState, action) => {
    switch (action.type) {
        case AT.FETCH_SHIPMENT:
            return {
                ...state,
                shipment: null,
                shipmentError: null,
                shipmentPending: true
            }
        case AT.FETCH_SHIPMENT_SUCCESS:
            return {
                ...state,
                shipment: action.payload,
                shipmentError: null,
                shipmentPending: false
            }
        case AT.FETCH_SHIPMENT_FAIL:
            return {
                ...state,
                shipment: null,
                shipmentError: action.error,
                shipmentPending: false
            }
        default:
            return state;
    }
}

export default app;