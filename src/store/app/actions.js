import { createAction, createLinkedActions } from '../../utils/redux';

const AT = {
  SET_CARRIER: 'SET_CARRIER',
  UNSET_CARRIER: 'UNSET_CARRIER',
  CLEAR_ALL: 'CLEAR_ALL',
  NOTIFY: 'NOTIFY',

  ...createLinkedActions('FETCH_INITIAL_DATA'),
  ...createLinkedActions('FETCH_SHIPMENT', true),
};

export const ACTION_TYPES = AT;

export const notify = (message, type, duration) =>
  createAction(AT.NOTIFY, { message, type, duration });
export const setCarrier = carrier => createAction(AT.SET_CARRIER, carrier);
export const unsetCarrier = () => createAction(AT.UNSET_CARRIER);

export const fetchShipment = shipmentNumber =>
  createAction(AT.FETCH_SHIPMENT, shipmentNumber);
