import {getJson} from './request';

const api = {
  /* App */
  // fetchShipment: shipmentNumber => getJson(`shipment/${shipmentNumber}`),
  // logout: () => Req.postJson('auth/logout', { Username:
  // Helper.getObjectProp(Store.getState().app, 'user.Username') }),

  fetchShipment: (carrier, shipmentNumber) => getJson(`api/${carrier}/shipment/${shipmentNumber}`)
};

export default api;
