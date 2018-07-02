import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import styles from './styles.css';

const Home = () => (
  <Segment inverted basic center aligned>
    <Container>
      <Header
        as="h1"
        content="Asdadaw y Qewiuhads"
        className={styles.hero1}
        inverted
      />
      <Header
        as="h2"
        content="Lorem ipsum sit amed dolor"
        inverted
        className={styles.hero2}
      />

      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
    <Segment style={{ minHeight: '1500px' }} />
  </Segment>
);

export default Home;
