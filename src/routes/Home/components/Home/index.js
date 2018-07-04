import React from 'react';
import {Redirect} from 'react-router';
import {Container, Header, Segment} from 'semantic-ui-react';
import CarrierSelector from 'components/CarrierSelector';
import ShipmentSearch from 'components/ShipmentSearch';
import styles from './styles.css';

class Home extends React.Component {
  state = {
    redirect: false
  };

  getDerivedStateFromProps(props, state) {
    return {
      ...state,
      redirect: !!props.shipment
    };
  }

  handleInputRef = c => {
    c.focus();
  }

  render() {
    if (this.state.redirect === true) 
      return <Redirect to="404"/>;
    
    const {carrier, fetchShipment, setCarrier, shipmentPending, shipmentError} = this.props;

    return (
      <Segment inverted grid textAlign="center">
        <Container text>
          <Segment vertical className={styles.emptySpace}/>
          <Header
            as="h1"
            content="Asdadaw y Qewiuhads"
            className={styles.centerAligned}
            inverted/>
          <Header
            as="h2"
            content="Lorem ipsum sit amed dolor"
            className={styles.hero2}
            inverted/>{' '} {carrier
            ? (<ShipmentSearch
              onSubmit={fetchShipment}
              inputRef={this.handleInputRef}
              loading={shipmentPending}
              error={shipmentError}/>)
            : (<CarrierSelector onSelect={carrier => setCarrier(carrier.name)}/>)}
        </Container>
        <Segment style={{
          minHeight: '1500px'
        }}/>
      </Segment>
    );
  }
}

export default Home;
