import React from 'react';
import {bool, func, object, string} from 'prop-types';
import {Button, Form, Message, Popup} from 'semantic-ui-react';
import styles from './styles.css'
import {isNil} from 'utils/core';
import {withCarrier} from 'utils/hocs';
import {carriers} from 'utils/carrierData';

class ShipmentSearch extends React.Component {
  state = {
    error: null,
    focusedOnce: false,
    shipmentNumber: null,
    popupNode: null
  };

  handleInputRef = elem => {
    if (this.props.autofocus === false || !elem || this.state.focusedOnce) 
      return;
    elem.focus();
    this.setState({focusedOnce: true});
  }
  handlePopupRef = elem => this.state.popupNode === null && this.setState({popupNode: elem});
  handleChange = e => this.setState({shipmentNumber: e.target.value, error: null})
  handleSubmit = () => {
    const {shipmentNumber} = this.state;
    if (!this.validate(shipmentNumber)) 
      return this.setState({error: 'Μη έγκυρος αριθμός αποστολής'})

    this
      .props
      .onSubmit(shipmentNumber);
  }
  validate = number => {
    const {carrier} = this.props;
    const {searchValidation} = carriers[carrier];
    const valid = typeof searchValidation === 'function'
      ? searchValidation(number)
      : searchValidation instanceof RegExp
        ? searchValidation.test(number)
        : true;
    return valid;
  }

  static getDerivedStateFromProps(props, state) {
    const obj = isNil(props.error)
      ? state
      : {
        ...state,
        error: props.error
      };
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
            error={hasError}
            disabed={loading === true}
            className={styles.noBottomMargin}
            action>
            <Popup
              trigger={(<input ref={this.handleInputRef} onChange={this.handleChange}/>)}
              context={popupNode}
              content={error}
              position='bottom center'
              open={hasError}/>
            <Button ref={this.handlePopupRef} icon="search" loading={loading === true}/>
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
