import React from 'react';
import {bool, func, object, string} from 'prop-types';
import {Button, Form, Message, Popup, Segment} from 'semantic-ui-react';
import {isNil} from 'utils/core';
import {withCarrier} from 'utils/hocs';

const carrierConfig = {
  dhl: {}
}

class ShipmentSearch extends React.Component {
  state = {
    error: null,
    focusedOnce: false,
    shipmentNumber: null,
    submitted: false,
    popupNode: null
  };

  handleInputRef = elem => {
    if (this.props.autofocus === false || !elem || this.state.focusedOnce) 
      return;
    elem.focus();
    this.setState({focusedOnce: true});
  }
  handlePopupRef = elem => this.state.popupNode === null && this.setState({popupNode: elem});
  handleChange = (e, {value}) => this.setState({shipmentNumber: value});
  handleSubmit = () => this
    .props
    .onSubmit(this.state.shipmentNumber);

  static getDerivedStateFromProps(props, state) {
    const obj = isNil(props.error)
      ? state
      : {
        ...state,
        error: props.error
      };
    //console.log('derived', props.error, state.error, '->', obj);
    return obj
  }

  render() {
    const {className, loading, style} = this.props;
    const {error, popupNode} = this.state;
    const hasError = !isNil(error);

    return (
      <div style={style} className={className}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="shipmentNumber"
            placeholder="Αναζήτηση Αποστολής"
            onChange={this.handleChange}
            error={hasError}
            disabed={loading === true}
            action>
            <input ref={this.handleInputRef}/>
            <Popup
              trigger={(<Button ref={this.handlePopupRef} icon="search" loading={loading === true}/>)}
              context={popupNode}
              content={error}
              position='right center'
              open={hasError}/>
          </Form.Input>{' '} {!!error
            ? <Message error content={error.description}/>
            : false}
        </Form>
      </div>
    );
  }
}

ShipmentSearch.propTypes = {
  autofocus: bool,
  carrier: string.isRequired,
  className: string,
  error: string,
  loading: bool,
  onSubmit: func.isRequired,
  style: object
};

export default withCarrier(ShipmentSearch);
