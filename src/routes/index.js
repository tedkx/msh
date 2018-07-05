import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shipment from './Shipment';
import Home from './Home';

const Service1 = props => <div>Service1</div>;
const Service2 = props => <div>Service2</div>;

const Routes = () => (
  <Switch>
    <Route exact path="/:company" component={Home} />
    <Route exact path="/:company/:shipmentNumber" component={Shipment} />
    <Route
      exact
      path="/:company/:shipmentNumber/service1"
      component={Service1}
    />
    <Route
      exact
      path="/:company/:shipmentNumber/service2"
      component={Service2}
    />

    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
