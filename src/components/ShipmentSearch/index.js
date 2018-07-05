import React from 'react';
import { bool, func, object } from 'prop-types';
import { Button, Form, Message, Segment } from 'semantic-ui-react';

class ShipmentSearch extends React.Component {
  state = { shipmentNumber: null, submitted: false };
  handleChange = (e, { value }) => this.setState({ shipmentNumber: value });
  handleSubmit = (...args) => {
    this.setState({ submitted: true });
    this.props.onSubmit(this.state.shipmentNumber);
  };

  render() {
    const { error, inputRef, loading } = this.props;
    return (
      <Segment inverted>
        <Form loading={loading === true} onSubmit={this.handleSubmit}>
          <Form.Input
            name="shipmentNumber"
            ref={inputRef}
            placeholder="Αναζήτηση Αποστολής"
            onChange={this.handleChange}
            action
          >
            <input />
            <Button icon="search" loading={this.state.submitted} />
          </Form.Input>{' '}
          {!!error ? <Message error content={error.description} /> : false}
        </Form>
      </Segment>
    );
  }
}

ShipmentSearch.propTypes = {
  error: object,
  inputRef: func,
  loading: bool,
  onSubmit: func.isRequired,
};

export default ShipmentSearch;
