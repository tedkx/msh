import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import CarrierSelector from 'components/CarrierSelector';
import styles from './styles.css';

const Home = props => {
  return (
    <Segment inverted grid textAlign="center">
      <Container text aligned center>
        <Segment vertical className={styles.emptySpace} />
        <Header
          as="h1"
          content="Asdadaw y Qewiuhads"
          className={styles.centerAligned}
          inverted
        />
        <Header
          as="h2"
          content="Lorem ipsum sit amed dolor"
          className={styles.hero2}
          inverted
          aligned
          center
        />{' '}
        {props.carrier ? false : <CarrierSelector />}
      </Container>
      <Segment
        style={{
          minHeight: '1500px',
        }}
      />
    </Segment>
  );
};

export default Home;
