import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import styles from './styles.css';

const TopBar = props => (
  <Segment inverted className={styles.root}>
    <Container>
      <Menu.Item as="a">SiteMap</Menu.Item>
      <Menu.Item as="a">Contact</Menu.Item>
    </Container>
  </Segment>
);

export default TopBar;
