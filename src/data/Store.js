import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { browserHistory }   from 'react-router' import {
// syncHistoryWithStore, routerReducer }         from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

/* Reducers */
import appReducer, { defaultState as appDefaults } from './app/reducer';
/* Sagas */
import AppSagas from './app/sagas';

const rootReducer = combineReducers({
  app: appReducer
  //routing: routerReducer
});

const defaultState = {
  app: {
    ...appDefaults,
    company: 'DHL '
  }
};

/* Middleware */
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const Store =
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? createStore(
        rootReducer,
        defaultState,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleware)
      )
    : createStore(rootReducer, defaultState, middleware);

/* Router History */
//export const history = syncHistoryWithStore(browserHistory, Store)

function* rootSaga() {
  yield [fork(AppSagas)];
}
sagaMiddleware.run(rootSaga);

export default Store;
