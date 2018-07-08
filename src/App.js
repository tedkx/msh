import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import CarrierContext from './components/CarrierContext';
import Store from './store/Store';
import Routes from './routes';
import Layout from './components/Layout';

class App extends Component {
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
