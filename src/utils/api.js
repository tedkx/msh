//import {getJson} from './request';

const api = {
  /* App */
  // fetchShipment: shipmentNumber => getJson(`shipment/${shipmentNumber}`),
  // logout: () => Req.postJson('auth/logout', { Username:
  // Helper.getObjectProp(Store.getState().app, 'user.Username') }),

  fetchShipment: shipmentNumber =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            Id: 1,
            AWB: '123456789',
            Requestor: 'Ρηκουέστορ',
            Shipper: 'Σίππερ',
            EstimatedDelivery: '2018-07-20T00:15:23Z',
          }),
        1000
      );
    }),
};

export default api;
