import React from 'react';
import {Redirect} from 'react-router';
import {Container, Header, Segment} from 'semantic-ui-react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import CarrierSelector from 'components/CarrierSelector';
import ShipmentSearch from 'components/ShipmentSearch';

import styles from './styles.css';
import transitions from './transitions.css';

class Home extends React.Component {
  handleInputRef = c => c.focus();

  render() {
    const {
      carrier,
      fetchShipment,
      setCarrier,
      shipment,
      shipmentPending,
      shipmentError
    } = this.props;
    if (!!shipment) 
      return <Redirect to={`${carrier}/${shipment.AWB}`}/>;
    
    return (
      <Segment inverted textAlign="center">
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
            inverted/>{' '}
          <div className={styles.transitionContainer}>
            <TransitionGroup>
              {!!carrier
                ? (
                  <CSSTransition key="search" classNames={transitions} timeout={300}>
                    <ShipmentSearch
                      onSubmit={shipmentNumber => fetchShipment(carrier, shipmentNumber)}
                      inputRef={this.handleInputRef}
                      loading={shipmentPending}
                      error={shipmentError}
                      className={styles.shipmentSearch}/>
                  </CSSTransition>
                )
                : (
                  <CSSTransition key="carrier" classNames={transitions} timeout={300}>
                    <CarrierSelector onSelect={carrier => setCarrier(carrier.name)}/>
                  </CSSTransition>
                )}
            </TransitionGroup>
          </div>
        </Container>
        <Segment style={{
          minHeight: '1500px'
        }}/>
      </Segment>
    );
  }
}

export default Home;
