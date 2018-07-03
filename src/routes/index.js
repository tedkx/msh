import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from '../components/Search';
import ActionsList from '../components/ActionsList';
import CarrierSelector from '../components/CarrierSelector';
import Home from './Home';

const Service1 = props => <div>Service1</div>;
const Service2 = props => <div>Service2</div>;

const Routes = () => (
  <Switch>
    <Route exact path="/:company" component={Search}/>
    <Route exact path="/:company/search" component={Search}/>
    <Route exact path="/:company/:shipmentId" component={ActionsList}/>
    <Route exact path="/:company/:shipmentId/service1" component={Service1}/>
    <Route exact path="/:company/:shipmentId/service2" component={Service2}/>

    <Route exact path="/" component={Home}/>
  </Switch>
);

export default Routes;
