import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import logo from './logo.svg';
import CarrierContext from './components/CarrierContext';
import Store from './store/Store';
import Routes from './routes';
import Layout from './components/Layout';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 3000);
  }

  render() {
    return (
      <Provider store={Store}>
        <Router>
          <CarrierContext.Provider>
            <Layout>
              <Routes/>
            </Layout>
          </CarrierContext.Provider>
        </Router>
      </Provider>
    );
  }
}

export default App;
