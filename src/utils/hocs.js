import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

export const withCarrier = Component => {
  const mapStateToProps = state => ({carrier: state.app.carrier});
  return connect(mapStateToProps)(props => !props.carrier
    ? (<Redirect to={{
      pathname: '/',
      from: props.history.location
    }}/>)
    : (<Component {...props}/>));
}

export const withShipment = Component => {
  const mapStateToProps = state => ({shipment: state.app.shipment});
  return connect(mapStateToProps)(props => !props.shipment
    ? (<Redirect to={{
      pathname: '/',
      from: props.history.location
    }}/>)
    : (<Component {...props}/>));
};
