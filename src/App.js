import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CompanyContext from './components/CompanyContext';
import Store from './data/Store';
import Routes from './routes';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <CompanyContext.Provider>
            <Layout>
              {/* <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit
                  <code>src/App.js</code>
                  and save to reload.
                </p>
              </div> */}

              <Routes/>

            </Layout>
          </CompanyContext.Provider>
        </Router>
      </Provider>
    );
  }
}

export default App;